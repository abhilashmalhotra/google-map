// AIzaSyCjwJWdFxaY8JM00UihRZWYaHjKi4xikt0   API 


var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 28.6415, lng: 77.1209},
		zoom: 13 // Higher No. more detail Max:21 
	});
	var rajouriGarden = {lat: 28.6415, lng: 77.1209};

	var marker = new google.maps.Marker({
		position: rajouriGarden, 
		map: map, 
		title: 'My Place'
	});

	var infoWindow = new google.maps.InfoWindow({
		content: 'I am living Here'
	});
	marker.addListener('click',function () {
		infoWindow.open(map, marker);
	});
}


