function initMap() {
  // Checks if google object is not defined
  if (!google) {
    console.error('Failed to load the Google Map!');
    return;
  }

  // Latitude and Longitude of given locations
  var myLocation = { lat: 43.25212610005312, lng: -79.93415987581209 };
  var mcmasterLocation = { lat: 43.26148842472675, lng: -79.91918248483984 };
  var bloorLocation = { lat: 43.65936101816361, lng: -79.4369978 };
  var googleLocation = { lat: 45.297774121645205, lng: -75.94392708922118 };

  // Centering the google map with the specified zoom
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.2,
    center: { lat: 44.39740292280134, lng: -77.97704878740579 },
  });

  // Markers for the different locations
  var myMarker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "My Location",
  });

  var mcmasterMarker = new google.maps.Marker({
    position: mcmasterLocation,
    map: map,
    title: "McMaster University",
  });

  var bloorMarker = new google.maps.Marker({
    position: bloorLocation,
    map: map,
    title: "Bloor Collegiate Institute",
  });

  var googleMarker = new google.maps.Marker({
    position: googleLocation,
    map: map,
    title: "Google Onsite Courses",
  });

  // Info window for each associated marker
  var myWindow = new google.maps.InfoWindow({
    content: "My Location"
  });

  var mcmasterWindow = new google.maps.InfoWindow({
    content: "McMaster University"
  });

  var bloorWindow = new google.maps.InfoWindow({
    content: "Bloor Collegiate Institute"
  });

  var googleWindow = new google.maps.InfoWindow({
    content: "Google Onsite Courses"
  });

  // Mouseover event listeners for the associated markers
  myMarker.addListener("mouseover", function () {
    myMarker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    myWindow.open(map, myMarker);
  });

  mcmasterMarker.addListener("mouseover", function () {
    mcmasterWindow.open(map, mcmasterMarker);
  });

  bloorMarker.addListener("mouseover", function () {
    bloorWindow.open(map, bloorMarker);
  });

  googleMarker.addListener("mouseover", function () {
    googleWindow.open(map, googleMarker);
  });
}

/*
Resources:
- https://stackoverflow.com/questions/8920738/google-maps-v3-marker-info-window-on-mouseover
- https://www.youtube.com/watch?v=Zxf1mnP5zcw
- https://developers.google.com/maps/documentation/javascript/infowindows
*/