import { map } from './WebGIS.js'
import { currentLayer } from './searchProvince.js'
import { info } from './hoverValues.js'

document.querySelector('.layerContainer-toggle').addEventListener('click', () => {
  const layerContainer = document.querySelector('.layerContainer')
  layerContainer.classList.toggle('open')
})

document.querySelector('.collapseButton').addEventListener('click', () => {
  const layerContainer = document.querySelector('.layerContainer')
  layerContainer.classList.remove('open')
})

document.querySelector('.toggleLayer').addEventListener('click', () => {
  document.querySelector('.toggleLayer').classList.toggle('layer-on')
  let layer = currentLayer
  if (document.querySelector('.toggleLayer') !== document.querySelector('.layer-on')) {
    map.removeLayer(layer)
    // layer.resetStyle()
    info.remove()
  }
  else {
    info.addTo(map)
    layer.addTo(map)

    // layer.setStyle({
    //   color: 'rgba(0,0,0,0)',
    // })
  }
})