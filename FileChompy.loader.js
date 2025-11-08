(() => {
	const script = document.createElement("script");
	script.src =
		"https://cdn.jsdelivr.net/gh/seanhealy/scratch@940d7eaebef66539c90f3d9e00ad6f36e9034215/FileChompy.js";

	script.onload = () => console.log("FileChompy loaded successfully!");
	script.onerror = () => console.error("Error loading FileChompy");

	document.head.appendChild(script);
})();
