let geocoder;
let map;

function initMap() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 15,
    center: latlng
  }
  
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var address = document.getElementById('address').textContent;

  geocoder.geocode( { 'address': address }, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      document.getElementById('addressHotel').textContent = results[0].formatted_address;

      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  alert('Geolocation is not supported by this browser.');
}

function showPosition(position) {
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        document.getElementById('currentLocation').textContent = 
        results[0].address_components[3].long_name + ', ' + results[0].address_components[4].long_name + ', ' + results[0].address_components[5].long_name;
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
}

 
window.onload = initMap();
window.onload = showPosition();
 

 
