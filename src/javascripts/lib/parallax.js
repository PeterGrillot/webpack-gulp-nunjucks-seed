// Module ES6
function Parallax(fn_property, fn_factor) {
	// Get elms.parallax
	const layer = document.getElementsByClassName('parallax__layer');
	const mainBg = document.getElementById('mainBg');
	// Loop through
	for (let i = 0; i < layer.length; i++) {
		// Leverage counter 0, 1, 2 ...
		// Set Position
		let pos = (window.scrollY * (i + 1) / fn_factor) * 0.3;
		// Set Attribute
		layer[i].setAttribute('style',`${fn_property}:-${pos}px`);
	}
	mainBg.setAttribute('style',`background-position-y:-${window.scrollY*1.4}px`);
};
// Export
module.exports = Parallax;