var countDown = function(id, endtime) {
	var clock = document.getElementById(id),
		seg = ["days","hours","minutes"];
	for (var i = 0; i < seg.length; i++) {
		var wrap  = document.createElement('div'),
			div = document.createElement('div'),
			span = document.createElement('span');
			wrap.setAttribute('class', 'clock__segment');
			div.setAttribute('class', 'segment__num '+seg[i]);
			span.innerHTML = seg[i];
			span.setAttribute('class', 'segment__label');
			clock.appendChild(wrap);
			wrap.appendChild(div);
			wrap.appendChild(span)
	}

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		//var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes
			//'seconds': seconds
		};
	}
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	//var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		//secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}
module.exports = countDown;