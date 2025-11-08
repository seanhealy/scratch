(() => {
	const script = document.createElement("script");
	script.src =
		"https://cdn.jsdelivr.net/gh/seanhealy/scratch@52e8b4169d3f5f0e0c83ecec9e4a08326c7fd980/FileChompy.js";

	script.onload = () => console.log("FileChompy loaded successfully!");
	script.onerror = () => console.error("Error loading FileChompy");

	document.head.appendChild(script);
})();
