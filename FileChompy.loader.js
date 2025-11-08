(() => {
	const script = document.createElement("script");
	script.src =
		"https://cdn.jsdelivr.net/gh/seanhealy/scratch@latest/FileChompy.js";

	script.onload = () => console.log("FileChompy loaded successfully!");
	script.onerror = () => console.error("Error loading FileChompy");

	document.head.appendChild(script);
})();
