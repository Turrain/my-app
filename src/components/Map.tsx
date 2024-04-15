import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MessagesPaneHeader from './MessagesPaneHeader'
import geojson_1 from '/public/geojson/geoBoundaries-KAZ-ADM1_simplified.geojson?raw'

export default function Map() {
  const defaultStyle = { color: 'blue' }
  const hoverStyle = { color: 'red','z-index': 99 }

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        e.target.setStyle(hoverStyle)
      },
      mouseout: (e) => {
        e.target.setStyle(defaultStyle)
      },
    })
  }

  return (
    <>
      <MessagesPaneHeader sender='fdfd' />
      <MapContainer
        center={[48.0196, 66.9237]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <GeoJSON data={geojson_1} onEachFeature={onEachFeature} />
      </MapContainer>
    </>
  )
}
