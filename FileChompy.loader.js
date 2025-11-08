(() => {
	const script = document.createElement("script");
	script.src =
		"https://cdn.jsdelivr.net/gh/seanhealy/scratch@819cc46073359a151271c0bb1034fa76ca07358d/FileChompy.js";

	script.onload = () => console.log("FileChompy loaded successfully!");
	script.onerror = () => console.error("Error loading FileChompy");

	document.head.appendChild(script);
})();
