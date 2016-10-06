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
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	// USING production variables is simple with the envVar function
	// Burn after reading
	// import envVar from 'lib/envVar.js';

	// var dev_var = envVar({production:'myProductionURL', development: 'myDevelopmentURL'});

	// // Test using `$ gulp production` vs `$ gulp` in terminal
	// console.log(dev_var);

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

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libParallax = __webpack_require__(4);
	
	var _libParallax2 = _interopRequireDefault(_libParallax);
	
	// FUNCTION
	(function () {
	  'use strict';
	  // ...code
	  // USAGE
	  var prop = 'top';
	  var factor = 3;
	  window.addEventListener('scroll', function () {
	    new _libParallax2['default'](prop, factor);
	  });
	
	  // Request
	  var request = new XMLHttpRequest();
	  var data;
	  request.open('GET', 'https://spreadsheets.google.com/feeds/list/1pstEHIoEiQiNtYlTTEIygRJaOVVRVUhAy6BGVzNGm20/od6/public/values?alt=json', true);
	
	  request.onload = function () {
	    if (request.status >= 200 && request.status < 400) {
	      // Success!
	      var data = JSON.parse(request.responseText);
	      for (var i = 0; i < data.feed.entry.length; i++) {
	        var list = document.getElementById('google_doc_list');
	        var entry = data.feed.entry[i];
	        list.innerHTML = list.innerHTML + '<div class="list"><p><a href="' + entry.gsx$url.$t + '">' + entry.gsx$roster.$t + '</a></p><p>' + entry.gsx$date.$t + ' - ' + entry.gsx$venue.$t + ' - ' + entry.gsx$location.$t + '</p></div>';
	
	        // data.feed.entry[i].gsx$date
	      }
	    } else {
	        // We reached our target server, but it returned an error
	        console.log('There was an error: ' + request.status);
	      }
	  };
	
	  request.onerror = function () {
	    console.log('There was a connection error of some sort');
	  };
	
	  console.log(request.send());
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	// Module ES6
	'use strict';
	
	function Parallax(fn_property, fn_factor) {
		// Get elms.parallax
		var layer = document.getElementsByClassName('parallax__layer');
		var mainBg = document.getElementById('mainBg');
		// Loop through
		for (var i = 0; i < layer.length; i++) {
			// Leverage counter 0, 1, 2 ...
			// Set Position
			var pos = window.scrollY * (i + 1) / fn_factor * 0.3;
			// Set Attribute
			layer[i].setAttribute('style', fn_property + ':-' + pos + 'px');
		}
		mainBg.setAttribute('style', 'background-position-y:-' + window.scrollY * 1.4 + 'px');
	};
	// Export
	module.exports = Parallax;

/***/ }
]);
//# sourceMappingURL=app.js.map