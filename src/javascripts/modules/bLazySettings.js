// IMPORTS

// FUNCTION
(function() {
	'use strict';
	window.onload = function() {
		var bLazy = new Blazy({
			breakpoints: [
				{ width: 640, src: 'data-src-sm' }
			],
			success: function(element) {
				setTimeout(function() {
					var parent = element.parentNode;
					parent.className = parent.className.replace(/\bloading\b/, '');
				}, 2000);
			}
		});
		setTimeout(bLazy.revalidate(), 200);
	}
})();