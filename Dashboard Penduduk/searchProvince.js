import { pendudukProvinsi } from "./Data/Penduduk_ProvinsiFix.js"
import { map } from "./WebGIS.js"
import { chroloplethStyle2 } from "./colorLegend.js"
import { info } from "./hoverValues.js"
// import { getData } from "./WebGIS.js"

export let currentLayer

const searchProvince = async () => {
  const searchInput = document.getElementsByClassName('searchInput')[0];
  const search = searchInput.value

  let getProvince = async () => {
    const response = await fetch(`http://localhost:3003/api/v1/BVT/getProvince`, {
      method: "GET"
    });

    const data = await response.json()
    return data;
  }
  const province = await getProvince()

  const searchProvince = province.find((feature) => {
    let provinceName = feature["provinsi"].toLowerCase()
    return provinceName == search.toLowerCase()
  });

  if (searchProvince) {
    if (currentLayer) {
      map.removeLayer(currentLayer)
    }

    let getProvinceName = async () => {
      const response = await fetch(`http://localhost:3003/api/v1/BVT/getProvinceName/${searchProvince["gid"]}`, {
        method: "GET",
      });

      const data = await response.json()
      return data
    }
    const provinceName = await getProvinceName()

    currentLayer = L.geoJSON(provinceName[0].json_build_object, {
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
    .addTo(map)
    map.fitBounds(currentLayer.getBounds())
    // console.log(provinceName[0].json_build_object.properties, 'hihi');
    // console.log(currentLayer, 'after');
  }
  else {
    console.log("Province not found");
  }
}

const searchAdd = document.getElementsByClassName('searchAdd')[0];
searchAdd.addEventListener('click', searchProvince);