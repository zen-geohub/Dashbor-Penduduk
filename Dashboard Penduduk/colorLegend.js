// import { pendudukProvinsi } from "./WebGIS.js"
// import { currentLayer } from "./searchProvince"
// import { searchProvince, provinceName } from "./searchProvince"

const legendValue = [
  { valueStart: 0, valueEnd: 2000, color: "#ffa600" },
  { valueStart: 2000, valueEnd: 5000, color: "#ed8c00" },
  { valueStart: 5000, valueEnd: 10000, color: "#d97300" },
  { valueStart: 10000, valueEnd: 16000, color: "#c45b02" },
  { valueStart: 16000, valueEnd: 32000, color: "#ad4303" },
  { valueStart: 32000, valueEnd: 40000, color: "#972b03" },
  { valueStart: 40000, valueEnd: undefined, color: "#7f1100" },
]

let getColor = (d) => {
  if (d > legendValue[legendValue.length - 1]["valueStart"]) return legendValue[legendValue.length - 1]["color"]
  const itemLegend = legendValue.find(item => d < item["valueEnd"] && d > item["valueStart"])
  return itemLegend["color"]
}

export let chroloplethStyle2 = (layer) => {
  return {
    fillColor: getColor(layer.properties["Penduduk_2018"]),
    weight: 2,
    opacity: 1,
    color: 'white',
    // dashArray: '3',
    fillOpacity: 0.7
  }
}

export let chroloplethStyle = (pendudukProvinsi) => {
  return {
    fillColor: getColor(pendudukProvinsi.properties["2020_Penduduk"]),
    weight: 2,
    opacity: 1,
    color: 'white',
    // dashArray: '3',
    fillOpacity: 0.7
  }
}