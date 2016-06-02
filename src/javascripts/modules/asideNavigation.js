// IMPORTS
import Throttled from 'lib/throttled.js';

// FUNCTION
(function() {
	'use strict';
	const asideNavigation = function() {
		var asideNavigation = $(".aside-navigation"),
			asideNavigationHeight = $(".aside-navigation").height(),
			asideNavigationContainerHeight = $(".aside-navigation__row").height();

			if ($('.hero__wrapper').length === 0){
				var interiorHeroHeight = 180,
				// 340 is 180px form top + 
					asideNavigationLocation = asideNavigation.offset().top + asideNavigationHeight,
					bottomOfNavigation = $(window).scrollTop() + 120;
			} else{
				var interiorHeroHeight = $(".hero__wrapper").height() +$(".interior-hero__breadcrumb").height() + 220,
					asideNavigationLocation = asideNavigation.offset().top,
					bottomOfNavigation = $(window).scrollTop() + 120;
			}

		if (bottomOfNavigation > interiorHeroHeight) {
			$('.aside-navigation').addClass('aside-navigation--sticky')
		}
		if (bottomOfNavigation < interiorHeroHeight) {
			$('.aside-navigation').removeClass('aside-navigation--sticky')
		}
		// if location of aside-nav less its size
		// is greater than tge aside-navs container; hide
		if( asideNavigationLocation  > asideNavigationContainerHeight){
			$('.aside-navigation').addClass("aside-navigation--hide");
		} else{
			$('.aside-navigation').removeClass("aside-navigation--hide");
		}
	}
	if($(".aside-navigation").length !== 0){
		asideNavigation();
		$(window).scroll(Throttled(asideNavigation, 20));
	}
})();