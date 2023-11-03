
alert("به آسان سفر خوش آمدید")

var map;
var lat = 36.3212565;
var lng = 59.5404382;




function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 7,
  };
   map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
 
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    var myCenter = new google.maps.LatLng(lat, lng);
    map.setCenter(new google.maps.LatLng(lat, lng))
    
  var marker = new google.maps.Marker({
    position: myCenter, draggable: true,
    animation: google.maps.Animation.BOUNCE,
    // icon: 'https://cdn2.iconfinder.com/data/icons/avatar-profile/434/avatar_contact_starwars_user_default_yoda-64.png'
  });

  marker.setMap(map);
  google.maps.event.addlistener(marker, 'click', (function(marker , i){
    return function(){

    
  var tag_p_lat = document.getElementById("lat")
  var tag_p_lng = document.getElementById("lng")

  var selected_location = marker.getPosition()

  tag_p_lat.innerHTML = selected_location.lat()
  tag_p_lng.innerHTML = selected_location.lng()
    }
})(marker));
  });
} else {
  alert("Geolocation is not supported by this browser.");
}


