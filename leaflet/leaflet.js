var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});

// use this method for two requests of the same image with different parameters
var iiifUrl = 'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json';

var layer1 = L.tileLayer.iiif(iiifUrl, {
    fitBounds: false,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(iiifUrl, {
    quality: 'gray'
  }
).addTo(map);


// use this method to layer two separate image requestsinfo.json
// var layer1 = L.tileLayer.iiif('https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json', {
//     fitBounds: false,
//   }
// ).addTo(map);

// var layer2 = L.tileLayer.iiif(
//   'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json'
// ).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
