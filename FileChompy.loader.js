(() => {
	const script = document.createElement("script");
	script.src =
		"https://cdn.jsdelivr.net/gh/seanhealy/scratch@063368bf8e23baade4da13605a3096e7ba66a9e3/FileChompy.js";

	script.onload = () => console.log("FileChompy loaded successfully!");
	script.onerror = () => console.error("Error loading FileChompy");

	document.head.appendChild(script);
})();
