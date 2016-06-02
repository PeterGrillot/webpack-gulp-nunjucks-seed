webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(5);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	// FUNCTION
	(function () {
		'use strict';
		var asideNavigation = function asideNavigation() {
			var asideNavigation = $(".aside-navigation"),
			    asideNavigationHeight = $(".aside-navigation").height(),
			    asideNavigationContainerHeight = $(".aside-navigation__row").height();
	
			if ($('.hero__wrapper').length === 0) {
				var interiorHeroHeight = 180,
				   
				// 340 is 180px form top +
				asideNavigationLocation = asideNavigation.offset().top + asideNavigationHeight,
				    bottomOfNavigation = $(window).scrollTop() + 120;
			} else {
				var interiorHeroHeight = $(".hero__wrapper").height() + $(".interior-hero__breadcrumb").height() + 220,
				    asideNavigationLocation = asideNavigation.offset().top,
				    bottomOfNavigation = $(window).scrollTop() + 120;
			}
	
			if (bottomOfNavigation > interiorHeroHeight) {
				$('.aside-navigation').addClass('aside-navigation--sticky');
			}
			if (bottomOfNavigation < interiorHeroHeight) {
				$('.aside-navigation').removeClass('aside-navigation--sticky');
			}
			// if location of aside-nav less its size
			// is greater than tge aside-navs container; hide
			if (asideNavigationLocation > asideNavigationContainerHeight) {
				$('.aside-navigation').addClass("aside-navigation--hide");
			} else {
				$('.aside-navigation').removeClass("aside-navigation--hide");
			}
		};
		if ($(".aside-navigation").length !== 0) {
			asideNavigation();
			$(window).scroll((0, _libThrottledJs2['default'])(asideNavigation, 20));
		}
	})();

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// *********************
	//    Modules Scripts
	// *********************
	'use strict';
	
	__webpack_require__(11);
	
	__webpack_require__(16);
	
	__webpack_require__(17);
	
	__webpack_require__(18);
	
	__webpack_require__(19);
	
	__webpack_require__(21);

/***/ },
/* 16 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	(function () {
		'use strict';
		var accordionItem = $('.accordion__item'),
		    toggleAccordion = function toggleAccordion(evt) {
			if ($(this).hasClass('accordion__item--selected')) {
				$(this).removeClass('accordion__item--selected');
			} else {
				accordionItem.removeClass('accordion__item--selected');
				$(this).addClass('accordion__item--selected');
			}
		};
		// events
		accordionItem.on('click', toggleAccordion);
	})();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(5);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	// FUNCTION
	(function () {
		'use strict';
		var backTop = function backTop() {
			this.addBackTop = function () {
				if (!document.getElementById('back-top')) {
					(function () {
						var backTop = document.createElement('div'),
						    mainElement = document.getElementsByTagName('main')[0];
						mainElement.appendChild(backTop);
						backTop.setAttribute('id', 'back-top');
						backTop.setAttribute('class', 'back-top');
						backTop.innerHTML = '<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i><span>Back to Top</span>';
						setTimeout(function () {
							backTop.classList.add('back-top--scrolled');
							backTop.addEventListener('click', scrolltoTop);
						}, 10);
					})();
				}
			}, this.removeBackTop = function () {
				if (document.getElementById('back-top')) {
					document.getElementById('back-top').remove();
				}
			};
		};
		var scrolltoTop = function scrolltoTop() {
			$('html, body').animate({ scrollTop: 0 });
		};
	
		var backTopScroll = function backTopScroll() {
			var bt = new backTop(),
			    windowHeight = $(window).height(),
			    top = $(window).scrollTop();
			if (top > windowHeight) {
				bt.addBackTop();
			} else {
				bt.removeBackTop();
			}
		};
	
		$(window).scroll((0, _libThrottledJs2['default'])(backTopScroll, 100));
		$('.back-top').on('click', function () {
			$('html, body').animate({ scrollTop: 0 });
		});
	})();

/***/ },
/* 18 */
/***/ function(module, exports) {

	// FUNCTION
	'use strict';
	
	(function () {
		'use strict';
		if (document.getElementById('productForm')) {
			var validator = new FormValidator('productForm', [{
				name: 'firstName',
				display: 'first name',
				rules: 'required|alpha'
			}, {
				name: 'lastName',
				display: 'last name',
				rules: 'required|alpha'
			}, {
				name: 'email',
				display: 'email',
				rules: 'required|valid_email'
			}], function (errors, evt) {
				// console.log(this.fields.lastName.element)
				for (var field in this.fields) {
					console.log("obj." + field, this.fields[field].element.validity.valid);
					if (this.fields[field].element.validity.valid) {
						this.fields[field].element.classList.remove('error');
					} else {
						this.fields[field].element.classList.add('error');
					}
					// this.fields[field].isValid;
				}
				if (errors.length > 0) {
					var errBox = document.getElementById('error-box');
					errBox.innerHTML = '';
	
					for (var n = 0; n < errors[0].messages.length; n++) {
						// errors[0].messages[n];
						errBox.innerHTML = errBox.innerHTML + errors[0].messages[n] + '<br>';
					}
					errBox.classList.add('error-box--display');
					return false;
				}
			});
		}
	})();

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottledJs = __webpack_require__(5);
	
	var _libThrottledJs2 = _interopRequireDefault(_libThrottledJs);
	
	var _libCountUpJs = __webpack_require__(20);
	
	var _libCountUpJs2 = _interopRequireDefault(_libCountUpJs);
	
	// FUNCTION
	(function () {
		'use strict';
		var countCard = function countCard() {
			$('.number-block__numerals').each(function () {
				if ($(this).text() == '0' && $(this).offset().top >= $(window).scrollTop()) {
					var counter = new _libCountUpJs2['default']($(this).attr('id'), 0, $(this).attr('data-counter'), 0, 2.5);
					counter.start();
				}
			});
		};
		$(window).scroll((0, _libThrottledJs2['default'])(countCard, 100));
	})();

/***/ },
/* 20 */
/***/ function(module, exports) {

	/*
	    countUp.js
	    (c) 2014-2015 @inorganik
	    Licensed under the MIT license.
	*/
	// target = id of html element or var of previously selected html element where counting occurs
	// startVal = the value you want to begin at
	// endVal = the value you want to arrive at
	// decimals = number of decimal places, default 0
	// duration = duration of animation in seconds, default 2
	// options = optional object of options (see below)
	
	'use strict';
	
	var CountUp = function CountUp(target, startVal, endVal, decimals, duration, options) {
	    // make sure requestAnimationFrame and cancelAnimationFrame are defined
	    // polyfill for browsers without native support
	    // by Opera engineer Erik Möller
	    var lastTime = 0;
	    var vendors = ['webkit', 'moz', 'ms', 'o'];
	    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }
	    if (!window.requestAnimationFrame) {
	        window.requestAnimationFrame = function (callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function () {
	                callback(currTime + timeToCall);
	            }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	    }
	    if (!window.cancelAnimationFrame) {
	        window.cancelAnimationFrame = function (id) {
	            clearTimeout(id);
	        };
	    }
	
	    // default options
	    this.options = {
	        useEasing: true, // toggle easing
	        useGrouping: true, // 1,000,000 vs 1000000
	        separator: ',', // character to use as a separator
	        decimal: '.' // character to use as a decimal
	    };
	    // extend default options with passed options object
	    for (var key in options) {
	        if (options.hasOwnProperty(key)) {
	            this.options[key] = options[key];
	        }
	    }
	    if (this.options.separator === '') this.options.useGrouping = false;
	    if (!this.options.prefix) this.options.prefix = '';
	    if (!this.options.suffix) this.options.suffix = '';
	
	    this.d = typeof target === 'string' ? document.getElementById(target) : target;
	    this.startVal = Number(startVal);
	    this.endVal = Number(endVal);
	    this.countDown = this.startVal > this.endVal;
	    this.frameVal = this.startVal;
	    this.decimals = Math.max(0, decimals || 0);
	    this.dec = Math.pow(10, this.decimals);
	    this.duration = Number(duration) * 1000 || 2000;
	    var self = this;
	
	    this.version = function () {
	        return '1.6.0';
	    };
	
	    // Print value to target
	    this.printValue = function (value) {
	        var result = !isNaN(value) ? self.formatNumber(value) : '--';
	        if (self.d.tagName == 'INPUT') {
	            this.d.value = result;
	        } else if (self.d.tagName == 'text' || self.d.tagName == 'tspan') {
	            this.d.textContent = result;
	        } else {
	            this.d.innerHTML = result;
	        }
	    };
	
	    // Robert Penner's easeOutExpo
	    this.easeOutExpo = function (t, b, c, d) {
	        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	    };
	    this.count = function (timestamp) {
	
	        if (!self.startTime) self.startTime = timestamp;
	
	        self.timestamp = timestamp;
	
	        var progress = timestamp - self.startTime;
	        self.remaining = self.duration - progress;
	
	        // to ease or not to ease
	        if (self.options.useEasing) {
	            if (self.countDown) {
	                self.frameVal = self.startVal - self.easeOutExpo(progress, 0, self.startVal - self.endVal, self.duration);
	            } else {
	                self.frameVal = self.easeOutExpo(progress, self.startVal, self.endVal - self.startVal, self.duration);
	            }
	        } else {
	            if (self.countDown) {
	                self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
	            } else {
	                self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
	            }
	        }
	
	        // don't go past endVal since progress can exceed duration in the last frame
	        if (self.countDown) {
	            self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
	        } else {
	            self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
	        }
	
	        // decimal
	        self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
	
	        // format and print value
	        self.printValue(self.frameVal);
	
	        // whether to continue
	        if (progress < self.duration) {
	            self.rAF = requestAnimationFrame(self.count);
	        } else {
	            if (self.callback) self.callback();
	        }
	    };
	    // start your animation
	    this.start = function (callback) {
	        self.callback = callback;
	        self.rAF = requestAnimationFrame(self.count);
	        return false;
	    };
	    this.formatNumber = function (nStr) {
	        nStr = nStr.toFixed(self.decimals);
	        nStr += '';
	        var x, x1, x2, rgx;
	        x = nStr.split('.');
	        x1 = x[0];
	        x2 = x.length > 1 ? self.options.decimal + x[1] : '';
	        rgx = /(\d+)(\d{3})/;
	        if (self.options.useGrouping) {
	            while (rgx.test(x1)) {
	                x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
	            }
	        }
	        return self.options.prefix + x1 + x2 + self.options.suffix;
	    };
	
	    // format startVal on initialization
	    self.printValue(self.startVal);
	};
	
	module.exports = CountUp;
	// Example:
	// var numAnim = new countUp("SomeElementYouWantToAnimate", 0, 99.99, 2, 2.5);
	// numAnim.start();
	// numAnim.update(135);
	// with optional callback:
	// numAnim.start(someMethodToCallOnComplete);

/***/ },
/* 21 */
/***/ function(module, exports) {

	/*!
	 * Bootstrap v3.3.5 (http://getbootstrap.com)
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	
	/*!
	 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=28163ae00acd19c653fca5e4e0997a9d)
	 * Config saved to config.json and https://gist.github.com/28163ae00acd19c653fca5e4e0997a9d
	 */
	'use strict';
	
	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery');
	}
	+(function ($) {
	  'use strict';
	  var version = $.fn.jquery.split(' ')[0].split('.');
	  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 2) {
	    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3');
	  }
	})(jQuery);
	
	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.6
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	+(function ($) {
	  'use strict';
	
	  // CAROUSEL CLASS DEFINITION
	  // =========================
	
	  var Carousel = function Carousel(element, options) {
	    this.$element = $(element);
	    this.$indicators = this.$element.find('.carousel-indicators');
	    this.options = options;
	    this.paused = null;
	    this.sliding = null;
	    this.interval = null;
	    this.$active = null;
	    this.$items = null;
	
	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));
	
	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
	  };
	
	  Carousel.VERSION = '3.3.6';
	
	  Carousel.TRANSITION_DURATION = 600;
	
	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  };
	
	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return;
	    switch (e.which) {
	      case 37:
	        this.prev();break;
	      case 39:
	        this.next();break;
	      default:
	        return;
	    }
	
	    e.preventDefault();
	  };
	
	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false);
	
	    this.interval && clearInterval(this.interval);
	
	    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
	
	    return this;
	  };
	
	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item');
	    return this.$items.index(item || this.$active);
	  };
	
	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active);
	    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
	    if (willWrap && !this.options.wrap) return active;
	    var delta = direction == 'prev' ? -1 : 1;
	    var itemIndex = (activeIndex + delta) % this.$items.length;
	    return this.$items.eq(itemIndex);
	  };
	
	  Carousel.prototype.to = function (pos) {
	    var that = this;
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));
	
	    if (pos > this.$items.length - 1 || pos < 0) return;
	
	    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
	      that.to(pos);
	    }); // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle();
	
	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
	  };
	
	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true);
	
	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end);
	      this.cycle(true);
	    }
	
	    this.interval = clearInterval(this.interval);
	
	    return this;
	  };
	
	  Carousel.prototype.next = function () {
	    if (this.sliding) return;
	    return this.slide('next');
	  };
	
	  Carousel.prototype.prev = function () {
	    if (this.sliding) return;
	    return this.slide('prev');
	  };
	
	  Carousel.prototype.slide = function (type, next) {
	    var $active = this.$element.find('.item.active');
	    var $next = next || this.getItemForDirection(type, $active);
	    var isCycling = this.interval;
	    var direction = type == 'next' ? 'left' : 'right';
	    var that = this;
	
	    if ($next.hasClass('active')) return this.sliding = false;
	
	    var relatedTarget = $next[0];
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    });
	    this.$element.trigger(slideEvent);
	    if (slideEvent.isDefaultPrevented()) return;
	
	    this.sliding = true;
	
	    isCycling && this.pause();
	
	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active');
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
	      $nextIndicator && $nextIndicator.addClass('active');
	    }
	
	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type);
	      $next[0].offsetWidth; // force reflow
	      $active.addClass(direction);
	      $next.addClass(direction);
	      $active.one('bsTransitionEnd', function () {
	        $next.removeClass([type, direction].join(' ')).addClass('active');
	        $active.removeClass(['active', direction].join(' '));
	        that.sliding = false;
	        setTimeout(function () {
	          that.$element.trigger(slidEvent);
	        }, 0);
	      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
	    } else {
	      $active.removeClass('active');
	      $next.addClass('active');
	      this.sliding = false;
	      this.$element.trigger(slidEvent);
	    }
	
	    isCycling && this.cycle();
	
	    return this;
	  };
	
	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.carousel');
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
	      var action = typeof option == 'string' ? option : options.slide;
	
	      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
	      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
	    });
	  }
	
	  var old = $.fn.carousel;
	
	  $.fn.carousel = Plugin;
	  $.fn.carousel.Constructor = Carousel;
	
	  // CAROUSEL NO CONFLICT
	  // ====================
	
	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old;
	    return this;
	  };
	
	  // CAROUSEL DATA-API
	  // =================
	
	  var clickHandler = function clickHandler(e) {
	    var href;
	    var $this = $(this);
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    if (!$target.hasClass('carousel')) return;
	    var options = $.extend({}, $target.data(), $this.data());
	    var slideIndex = $this.attr('data-slide-to');
	    if (slideIndex) options.interval = false;
	
	    Plugin.call($target, options);
	
	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex);
	    }
	
	    e.preventDefault();
	  };
	
	  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);
	
	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this);
	      Plugin.call($carousel, $carousel.data());
	    });
	  });
	})(jQuery);
	
	/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	+(function ($) {
	  'use strict';
	
	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================
	
	  function transitionEnd() {
	    var el = document.createElement('bootstrap');
	
	    var transEndEventNames = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };
	
	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] };
	      }
	    }
	
	    return false; // explicit for ie8 (  ._.)
	  }
	
	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false;
	    var $el = this;
	    $(this).one('bsTransitionEnd', function () {
	      called = true;
	    });
	    var callback = function callback() {
	      if (!called) $($el).trigger($.support.transition.end);
	    };
	    setTimeout(callback, duration);
	    return this;
	  };
	
	  $(function () {
	    $.support.transition = transitionEnd();
	
	    if (!$.support.transition) return;
	
	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function handle(e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
	      }
	    };
	  });
	})(jQuery);

/***/ }
]);
//# sourceMappingURL=interior.js.map