import { pendudukProvinsi } from "./Data/Penduduk_ProvinsiFix.js";
import { info } from "./hoverValues.js"
import { chroloplethStyle } from "./colorLegend.js"
import { chroloplethStyle2 } from "./colorLegend.js"

export let map = L.map('map')
map.createPane('labels')

// -------------------------Control Basemap--------------------------------
// let esriMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
//   // attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
// })
// esriMap.addTo(map);

// let OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//   maxZoom: 17,
//   // attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });
// OpenTopoMap.addTo(map)

// let googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
//   maxZoom: 20,
//   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
// });
// googleHybrid.addTo(map)

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
  attribution: '©OpenStreetMap, ©CartoDB',
  pane: 'labels'
}).addTo(map);

// let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
//   maxZoom: 20,
//   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
// });
// googleStreets.addTo(map)

let basemapCartoNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy;OpenStreetMap, &copy;CartoDB'
});
basemapCartoNoLabels.addTo(map);

let baseLayers = {
  // 'ESRI': esriMap,
  // 'OSM': OpenTopoMap,
  // 'Google Hybrid': googleHybrid,
  'Labels': positronLabels,
  // 'Google Streets': googleStreets,
  'Carto No Label': basemapCartoNoLabels,
}

L.control.layers(null, baseLayers, { position: 'bottomright', collapsed: true }).addTo(map);
// ----------------------------------------------------------------------------------

let zoomToFeature = (e) => {
  map.fitBounds(e.target.getBounds())
}
info.addTo(map)

export const getData = async () => {
  const response = await fetch('http://localhost:3003/api/v1/BVT/convert', {
    method: "GET",
  });
  const data = await response.json()
  return data
}
export let pendudukProvinsi2 = await getData()
export let geojson2 = L.featureGroup()

pendudukProvinsi2.forEach(feature => {
  let coba = L.geoJSON(feature.json_build_object, {
    style: chroloplethStyle2,
    onEachFeature: (feature, layer) => {
      layer.on('click', (e) => {
        zoomToFeature(e)
      })
      layer.on('mouseover', () => {
        info.update(feature)
      })
      layer.on('mouseout', () => {
        info.update()
      })
    }
  })
  geojson2.addLayer(coba)
  // console.log(typeof (coba), coba, 'hehe');
});
console.log(pendudukProvinsi2, 'hihi');

geojson2.addTo(map)

map.fitBounds(geojson2.getBounds())

// let geojson2 = 

// console.log(typeof (geojson2), geojson2);

// export let geojson = L.geoJSON(pendudukProvinsi, {
//   style: chroloplethStyle,
//   onEachFeature: (feature, layer) => {
//     layer.on('click', (e) => {
//       zoomToFeature(e)
//     })
//     layer.on('mouseover', () => {
//       info.update(feature)
//     })
//     layer.on('mouseout', () => {
//       info.update()
//     })
//   }
// }).addTo(map)
// map.fitBounds(geojson.getBounds())




// let getPosition = (position) => {
//   console.log(position)

//   let lat = position.coords.latitude
//   let long = position.coords.longitude
//   let acc = position.coords.accuracy

//   // L.marker([lat, long]).addTo(map)
//   // L.circle([lat, long], {radius: acc}).addTo(map)

//   let featureGroup = L.featureGroup([
//     L.marker([lat, long]),
//     L.circle([lat, long], { radius: acc })
//   ]).addTo(map)

//   map.fitBounds(featureGroup.getBounds())
// }

// if (!navigator.geolocation) {
//   alert("Freak")
// }
// else {
//   navigator.geolocation.getCurrentPosition(getPosition)
// }



// tesAsync()