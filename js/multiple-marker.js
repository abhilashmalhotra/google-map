// AIzaSyCjwJWdFxaY8JM00UihRZWYaHjKi4xikt0   API 


var map;

var markers = [];
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 28.6415, lng: 77.1209},
		zoom: 13 // Higher No. more detail Max:21 
	});
	var locations = [
	{title: 'Rajouri Garden', location: {lat:28.6415 , lng: 77.1209}},
	{title: 'Uttam Nagar', location: {lat:28.636944 , lng:77.052849}},
	{title: 'Tilak Nagar', location: {lat:28.6391 , lng:77.0868 }},
	{title: 'Janak Puri', location: {lat:28.6219 , lng:77.0878 }},
	];

	var largeInfowindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();
	for(var i = 0; i < locations.length; i++){
		// Get Position from the array
		var position = locations[i].location;
		var title = locations[i].title;
		// Create marker as per location
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			id: i
		});
		// Push the marker to our array of markers
		markers.push(marker);
		// Extend the boundries of the map for each marker
		bounds.extend(marker.position);
		// Create an click event to open infoWindoe
		marker.addListener('click', function(){
			populateInfoWindow(this, largeInfowindow);
		})
	}
	map.fitBounds(bounds);

	// Hide and show listner
	document.getElementById('show-listing').addEventListener('click', showListing);
	document.getElementById('hide-listing').addEventListener('click', hideListing);

	function populateInfoWindow (marker, infowindow) {
		if(infowindow.marker != marker){
			infowindow.marker = marker;
			infowindow.setContent('<div>'+ marker.title + '</div>');
			infowindow.open(map, marker);
			// Make sure the marker property is cleared if the infowindow is closed
			// infowindow.addListener('closeclick',fucntion(){
			// 	infowindow.setMarker(null);
			// });
		}
	}
	// Show Listing
	function showListing () {
		var bounds = new google.maps.LatLngBounds();
		// Extend the boundries
		for(var i =0; i< markers.length; i++){
			markers[i].setMap(map);
			bounds.extend(markers[i].position);
		}
		map.fitBounds(bounds);
	}
	// Hide Listing
	function hideListing () {
		for(var i =0; i< markers.length; i++){
			markers[i].setMap(null);
		}
	}
}


