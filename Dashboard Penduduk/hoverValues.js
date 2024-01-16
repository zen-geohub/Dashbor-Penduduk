export let info = L.control()

info.onAdd = function() {
  this._div = L.DomUtil.create('div', 'info')
  this.update()

  return this._div
}

info.update = function (feature) {
  this._div.innerHTML =  '<h4>Indonesia Population</h4>' + (feature ?
        '<b>' + feature.properties.provinsi + '</b><br/>' + feature.properties["Penduduk_2018"] + ' ribu jiwa'  
        : "Hover over a province")
}
