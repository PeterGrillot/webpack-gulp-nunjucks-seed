// IMPORTS
import Screen from 'lib/screen.js';

// FUNCTION
(function() {
	'use strict';
	var screenOverlay = new Screen(),
		morphSearch = $('.utility-search'),
		searchInput = $('input.utility-search__input'),
		seachInputWrapper = $('.utility-nav__search'),
		isOpen = false,
		// show/hide search area
		toggleSearch = function(evt) {
			// return if open and the input gets focused
			if (evt.type.toLowerCase() === 'focus' && isOpen) return false;

			//var offsets = morphSearch.getBoundingClientRect();
			if (isOpen) {
				morphSearch.removeClass('utility-search--open');
				seachInputWrapper.removeClass('utility-nav__search--on');
				screenOverlay.turnScreenOff();
				searchInput.val('').blur();
			} else {
				setTimeout(function(){searchInput.focus()}, 800);
				morphSearch.addClass('utility-search--open');
				seachInputWrapper.addClass('utility-nav__search--on');
				screenOverlay.turnScreenOn('hard');
			}
			isOpen = !isOpen;
		};
	// events
	$('.utility-search__trigger').on('click', toggleSearch);
	
	// esc key closes search overlay
	// keyboard navigation events
	document.addEventListener('keydown', function(ev) {
		var keyCode = ev.keyCode || ev.which;
		if (keyCode === 27 && isOpen) {
			toggleSearch(ev);
		}
	});
})();