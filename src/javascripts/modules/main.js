// IMPORTS
import Parallax from 'lib/parallax';

// FUNCTION
(function() {
	'use strict';
	// ...code
	// USAGE
	const prop = 'top';
	const factor = 3;
	window.addEventListener('scroll', () => {
		new Parallax(prop, factor);
	});

	// Request
	var request = new XMLHttpRequest();
	var data;
	request.open('GET', 'https://spreadsheets.google.com/feeds/list/1pstEHIoEiQiNtYlTTEIygRJaOVVRVUhAy6BGVzNGm20/od6/public/values?alt=json', true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			var data = JSON.parse(request.responseText);
			document.getElementById('js-loader').remove();
			for (var i = 0; i < data.feed.entry.length; i++) {
				var list = document.getElementById('js-google_doc_list');
				var entry = data.feed.entry[i];
				list.innerHTML = list.innerHTML +
					`<div class="list">
						<p><a href="${entry.gsx$url.$t}">${entry.gsx$roster.$t}</a></p>
						<p>${entry.gsx$date.$t} - ${entry.gsx$location.$t}</p>
					</div>`

				// data.feed.entry[i].gsx$date
			}
		} else {
			// We reached our target server, but it returned an error
			console.log(`There was an error: ${request.status}`);
		}
	};

	request.onerror = function() {
		console.log('There was a connection error of some sort');
	};
	request.send();
})();