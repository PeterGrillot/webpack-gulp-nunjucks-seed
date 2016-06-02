// IMPORTS
import Throttled from 'lib/throttled.js';
// FUNCTION
(function() {
	'use strict';
	const backTop = function() {
		this.addBackTop = function(){
			if (!document.getElementById('back-top')) {
				let backTop = document.createElement('div'),
					mainElement = document.getElementsByTagName('main')[0];
					mainElement.appendChild(backTop)
					backTop.setAttribute('id', 'back-top');
					backTop.setAttribute('class', 'back-top');
					backTop.innerHTML = '<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>';
				setTimeout(function() {
					backTop.classList.add('back-top--scrolled');
					backTop.addEventListener('click', scrolltoTop);
				}, 10);
			}
		},
		this.removeBackTop = function(){
			if (document.getElementById('back-top')) {
				document.getElementById('back-top').remove();
			}
		}
	}
	const scrolltoTop = function(){
		$('html, body').animate({ scrollTop: 0});
	}

	const backTopScroll = function(){
		let bt = new backTop(),
			windowHeight = $(window).height(),
			top = $(window).scrollTop();
		if( top > windowHeight){
			bt.addBackTop();
		} else{
			bt.removeBackTop();
		}
	}

	$(window).scroll(Throttled(backTopScroll, 100));
	$('.back-top').on('click',function(){
		$('html, body').animate({ scrollTop: 0});
	});
})();