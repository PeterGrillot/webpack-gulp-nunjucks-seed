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
	
	// IMPORT all modules here. Keep lib and minified files out this file.
	// Except for the example below
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	// USING production variables is simple with the envVar function
	// Burn after reading
	
	var _libEnvVarJs = __webpack_require__(3);
	
	var _libEnvVarJs2 = _interopRequireDefault(_libEnvVarJs);
	
	var dev_var = (0, _libEnvVarJs2['default'])({ production: 'myProductionURL', development: 'myDevelopmentURL' });
	
	// Test using `$ gulp production` vs `$ gulp` in terminal
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Jquery adds inline styles and these need to be overwritten.
	// HeadStyle writes styles to the head tag and destorys them as well
	'use strict';
	
	var envVar = function envVar(obj) {
	    if (true) {
	        return obj.development;
	    }
	    if (false) {
	        return obj.production;
	    }
	};
	module.exports = envVar;

/***/ }
]);
//# sourceMappingURL=app.js.map