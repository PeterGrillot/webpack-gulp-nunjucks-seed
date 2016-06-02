// IMPORTS
import Throttled from 'lib/throttled.js';
import CountUp from 'lib/countUp.js';

// FUNCTION
(function() {
	'use strict';
	var countCard = function() {
		$('.number-block__numerals').each(function() {
			if ($(this).text() == '0' && $(this).offset().top >= $(window).scrollTop()) {
				var counter = new CountUp($(this).attr('id'), 0, $(this).attr('data-counter'), 0, 2.5);
				counter.start();
			}
		});
	}
	$(window).scroll(Throttled(countCard, 100));
})();