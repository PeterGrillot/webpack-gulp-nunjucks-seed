$(window).load(function() {
	var markers = new Array();
	var iconSrc = {};
	iconSrc['National College Fairs'] = '/images/icons/marker-blue.svg';
	iconSrc['STEM College and Career Fairs'] =
		'/images/icons/marker-green.svg';
	iconSrc['Performing and Visual Arts College Fairs'] =
		'/images/icons/marker-red.svg';
	//Further down, in new google.maps.Marker, the icon line becomes:
	// icon: iconSrc[locations[i][2]]
	var locations = [
		['<a href="#"><strong>Dallas, TX</strong></a>', 'Loews Anatole',
			'National College Fairs', 32.7766642, -96.79698789999998, 1
		],
		['<a href="#"><strong>New York City</strong></a>',
			'Hilton Times Square', 'STEM College and Career Fairs', 40.7127837, -
			74.00594130000002, 2
		],
		['<a href="#"><strong>Anaheim, CA</strong></a>',
			'Anaheim Convention Center',
			'Performing and Visual Arts College Fairs', 33.8352932, -117.91450359999999,
			3
		],
	];
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		scrollwheel: false,
		// center: new google.maps.LatLng(39.8282, -98.5795),
		center: new google.maps.LatLng(41.345783, -114.352139),
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	var infowindow = new google.maps.InfoWindow();
	var marker, i;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][3], locations[i][4]),
			map: map,
			icon: iconSrc[locations[i][2]]
		});
		markers.push(marker);
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][0] + "<br>" + locations[
					i][2] + "<br>" + locations[i][1]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
	// == shows all markers of a particular category, and ensures the checkbox is checked ==
	function show(category) {
		for (var i = 0; i < locations.length; i++) {
			if (locations[i][2] == category) {
				markers[i].setVisible(true);
			}
		}
	}
	// == hides all markers of a particular category, and ensures the checkbox is cleared ==

	function hide(category) {
		for (var i = 0; i < locations.length; i++) {
			if (locations[i][2] == category) {
				markers[i].setVisible(false);
			}
		}
	}
	// == show or hide the categories initially ==
	hide("National College Fairs");
	hide("STEM College and Career Fairs");
	hide("Performing and Visual Arts College Fairs");
	$(".checkbox").click(function() {
		var cat = $(this).attr("value");
		// If checked
		if ($(this).is(":checked")) {
			show(cat);
		} else {
			hide(cat);
		}
	});
}); //]]>
