// FUNCTION
(function() {
	'use strict';

	// a temp value to cache *what* we're about to show
	var target = null;

	// collect all the tabs
	var tabs = $('.tab__button').on('click', function() {
		target = $(this.hash).removeAttr('id');

		$('.tab__button').removeClass('tab__button--active');
		$(this).addClass('tab__button--active');
		// if the URL isn't going to change, then hashchange
		// event doesn't fire, so we trigger the update manually
		if (location.hash === this.hash) {
			// but this has to happen after the DOM update has
			// completed, so we wrap it in a setTimeout 0
			setTimeout(update, 0);
		}
	});

	// get an array of the panel ids (from the anchor hash)
	var targets = tabs.map(function() {
		return this.hash;
	}).get();

	function update() {

		if (target) {
			target.attr('id', target.data('old-id'));
			target = null;
		}

		var hash = window.location.hash;
		if (targets.indexOf(hash) !== -1) {
			$('.tab__button').removeClass('tab__button--active');
			$('a[href*="' + hash + '"]').addClass('tab__button--active');
			show(hash);
		}
	}

	function show(id) {
		// if no value was given, let's take the first panel
		if (!id) {
			id = targets[0];
		}
		// remove the tab__content--active class from the tabs,
		// and add it back to the one the user selected
		$('.tab__content').removeClass('tab__content--active');

		// now hide all the panels, then filter to
		// the one we're interested in, and show it
		$('.tab__content[data-tab="' + id + '"]').addClass('tab__content--active')
	}

	$(window).on('hashchange', update);

	// initialise
	if (targets.indexOf(window.location.hash) !== -1) {
		update();
	} else {
		show();
	}
	// shadow animation
	$('.tab__navigation').scroll(

		function() {
			// var fullTabsWidth = 
			var totalWidth = $('.tab__button').length * $('.tab__button').outerWidth(),
				scrollLocation = $(this).scrollLeft() + $(this).width();
			if (scrollLocation <= totalWidth - $('.tab__button').outerWidth()) {
				$('.tab__block').removeClass('no--shadow');
			} else {
				$('.tab__block').addClass('no--shadow');
			}
		}
	);
})();
