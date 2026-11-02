#!/usr/bin/env bash
# Set up Delta inside a playpen guest so a `playpen claude` session can share
# itself with /delta share. Run it in the guest (`playpen shell`). Safe to rerun.
#
# The project's playpen.config.ts must allow these hosts first:
#   network: { allow: ["delta.dev", "releases.delta.dev", "delta.zed.dev"] }
set -euo pipefail

delta="$HOME/.local/bin/delta"
plugins="$HOME/.claude/plugins"

say() { printf '\n==> %s\n' "$*"; }
die() { printf 'error: %s\n' "$*" >&2; exit 1; }

say "Checking the fence lets Delta through"
for host in delta.dev releases.delta.dev; do
	curl -fsS -o /dev/null --max-time 15 "https://$host/" ||
		die "can't reach $host. Add it to network.allow in playpen.config.ts, then run 'playpen start' on the host."
done

if [[ -x "$delta" ]]; then
	say "Delta CLI already installed: $("$delta" --version)"
else
	say "Installing the Delta CLI to ~/.local"
	installer="$(mktemp)"
	trap 'rm -f "$installer"' EXIT
	curl -fsSL https://delta.dev/install.sh -o "$installer"
	sh "$installer"
fi

# playpen copies the host's plugin index verbatim, so installPath can point at
# the host's home, which doesn't exist here. Point it at this guest's home.
# Remove once playpen rewrites these files itself.
say "Pointing plugin paths at $HOME"
for f in "$plugins/installed_plugins.json" "$plugins/known_marketplaces.json"; do
	[[ -f "$f" ]] || continue
	sed -i -E "s#(\"(installPath|installLocation)\": *\")[^\"]*/\.claude/plugins/#\1$HOME/.claude/plugins/#g" "$f"
done

if grep -qs '"delta@zed-industries"' "$plugins/installed_plugins.json"; then
	say "Claude Code plugin already installed"
else
	say "Installing the Delta plugin for Claude Code"
	claude plugin marketplace add zed-industries/delta-claude
	claude plugin install delta@zed-industries
fi

say "Signing in to Delta"
if "$delta" auth status >/dev/null 2>&1; then
	echo "Already signed in."
else
	"$delta" auth login
fi

case ":$PATH:" in
*":$HOME/.local/bin:"*) ;;
*) printf '\nNote: ~/.local/bin is not on PATH. Add to your shell config:\n  export PATH="$HOME/.local/bin:$PATH"\n' ;;
esac

cat <<'EOF'

Done. Next:
  1. On the host:   playpen claude --keep
  2. In Claude:     /delta-setup   (pick Manual for the tightest sync)
                    /delta share
  3. Open the link in a browser on the host and choose "Open on web".
     Don't join from the host's Delta app or host Claude: that mounts the
     checkout on the host and runs files the guest can write.
EOF
