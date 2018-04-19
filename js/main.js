

	function initMap(){
		var options = {
			zoom:8,
			center:{lat:42.3601,lng:-71.0589}
		}
		var map = new
		google.maps.Map(document.getElementById('map'), options);

		google.maps.event.addListener(map, 'click',
		function(event){
			addMarker({coords:event.latLng});
		});

		// var marker = new google.maps.Marker({
		// 	position:{lat:42.4668,lng:-70.9495},
		// 	map:map,
		// 	icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
		// });
		//
		// var infoWindow = new google.maps.InfoWindow({
		// 	content: '<h1>Nashville</h1>'
		// });
		//
		// marker.addListener('click', function(){
		// 	infoWindow.open(map, marker);
		// });

		addMarker({lat:42.4668,lng:-70.9495});
		addMarker({lat:42.8584,lng:-70.9300});

		function addMarker(coords){
			 var marker = new google.maps.Marker({
			 	position:coords,
			 	map:map,
			 	icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			 });


		}


	}
