var map
var defaultZoom = 15
var markerLocation = new L.LatLng(32.617798,-83.612952);

var marker = new L.Marker(markerLocation);


function loadMap() {
 	map = new L.Map('map');
	var cloudmade = new L.TileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	    maxZoom: 18
	});
	var warnervegas = new L.LatLng(32.617798,-83.612952); // geographical point (longitude and latitude)
	map.setView(warnervegas, defaultZoom).addLayer(cloudmade);
	$("#button").bind('click', function clickButt(){
		var address = $("input").val()
		geoCode(address, displayAddress)
	})
	map.addLayer(marker);
	marker.bindPopup("<b>Commercial Circle</b>").openPopup();
}

document.addEventListener('DOMContentLoaded', loadMap)

function geoCode(address, callback) {
	var firstPart = 'http://geocoding.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/geocoding/v2/find.geojs?query='
	var url = firstPart + encodeURI(address)
	$.ajaxJSONP({
	  url: url + '&callback=?',
	  success: callback
	})
}

function displayAddress(data) {
	console.log(data)
	var markerLocation = new L.LatLng(data.features[0].centroid.coordinates[1], data.features[0].centroid.coordinates[0]);
	setCenter(markerLocation)
	var marker = new L.Marker(markerLocation);
	map.addLayer(marker);
	}
	
function setCenter(markerLocation) {
	map.setView(markerLocation, defaultZoom)
}	

