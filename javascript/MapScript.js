	function initialize() {
		var myLatlng = new google.maps.LatLng(53.349221, -6.242171);

		var mapOptions = {
			center: myLatlng,
			zoom: 16
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var marker = new google.maps.Marker({
			position: myLatlng,
			title: "NCI"
		});

		// To add the marker to the map, call setMap();
		marker.setMap(map);
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	//script for google maps by Kevin Flood