require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (Map, MapView, Graphic, GraphicsLayer) {
  // Create the map
  var map = new Map({
    basemap: "streets",
  });

  // Create a view for the map
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-122.4194, 37.7749], // San Francisco
    zoom: 12,
  });

  // Create a graphics layer for markers
  var graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  // Sample marker data
  var markerData = [
    {
      name: "Marker 1",
      lat: 37.7749,
      lon: -122.4194,
      info: "Information about Marker 1",
    },
    {
      name: "Marker 2",
      lat: 37.7933,
      lon: -122.4429,
      info: "Information about Marker 2",
    },
    // Add more marker data here...
  ];

  // Add markers to the map
  markerData.forEach(function (marker) {
    var point = {
      type: "point",
      longitude: marker.lon,
      latitude: marker.lat,
    };
    var markerSymbol = {
      type: "simple-marker",
      color: "blue",
      size: "8px",
    };
    var popupTemplate = {
      title: "{name}",
      content: "{info}",
    };
    var graphic = new Graphic({
      geometry: point,
      symbol: markerSymbol,
      attributes: marker,
      popupTemplate: popupTemplate,
    });
    graphicsLayer.add(graphic);
  });
});
