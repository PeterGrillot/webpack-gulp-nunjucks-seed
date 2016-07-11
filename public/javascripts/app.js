webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules scripts
	// *********************
	
	// MINIFIED Vendor file should be copied over via copyScripts.js (it is by default)
	
	// USING production variables is simple
	// Burn after reading
	'use strict';
	
	// IMPORT all modules here. Keep lib and minified files out this file.
	
	__webpack_require__(2);
	
	if (true) {
		var dev_var = 'url/to/dev';
	}
	if (false) {
		var dev_var = 'url/to/prod';
	}
	console.log(dev_var);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// IMPORTS
	
	// FUNCTION
	'use strict';
	
	(function () {
		'use strict';
		window.onload = function () {
			var bLazy = new Blazy({
				breakpoints: [{ width: 640, src: 'data-src-sm' }],
				success: function success(element) {
					setTimeout(function () {
						var parent = element.parentNode;
						parent.className = parent.className.replace(/\bloading\b/, '');
					}, 2000);
				}
			});
			setTimeout(bLazy.revalidate(), 200);
		};
	})();

/***/ }
]);
//# sourceMappingURL=app.js.map