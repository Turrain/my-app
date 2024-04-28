import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  FeatureGroup,
  ImageOverlay,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MessagesPaneHeader from './MessagesPaneHeader'
import geojson_1 from '/public/geojson/geoBoundaries-KAZ-ADM1_simplified.geojson?raw'
import React from 'react'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import L, { LatLngTuple } from 'leaflet'
import { Select, Option } from '@mui/joy'
export default function Map() {
  const defaultStyle = { color: 'blue' }
  const hoverStyle = { color: 'red', 'z-index': 99 }

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
  const [selectedFeature, setSelectedFeature] = React.useState(null)

  const handleFeatureClick = (event) => {
    const feature = event.layer.feature
    setSelectedFeature(selectedFeature === feature ? null : feature)
  }

  const featureStyle = (feature) => {
    const isSelected = selectedFeature === feature
    return {
      fillColor: isSelected ? 'red' : 'green',
      fillOpacity: isSelected ? 0.5 : 0.3,
      color: 'black',
      weight: isSelected ? 2 : 1,
    }
  }
  const _created = (e) => console.log(e)
  const imageBounds = [
    [40.0196, 60.9237] as LatLngTuple,
    [50.1196, 72.0237] as LatLngTuple,
  ]
  
  const [layer, setLayer] = React.useState('temp_new')

  return (
    <>
      <MessagesPaneHeader sender='fdfd' />

      
      <select >
        <option value='clouds_new'>Clouds</option>
        <option value='precipitation_new'>Precipitation</option>
        <option value='pressure_new'>Pressure</option>
        <option value='wind_new'>Wind</option>
        <option value='temp_new'>Temperature</option>
      </select>
      <MapContainer
        center={[48.0196, 66.9237]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <FeatureGroup>
          <EditControl
            position='topright'
            onCreated={_created}
            draw={
              {
                /* rectangle: false,
                    circle: false,
                    circlemarker: false,
                    marker: false,
                    polyline: false, */
              }
            }
          />
        </FeatureGroup>
        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />

        <TileLayer
          url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=06aa53524f90fb1e981eb6b776edabcc`}
        />

        <GeoJSON
          data={geojson_1}
          onEachFeature={onEachFeature}
          style={featureStyle}
          eventHandlers={{
            click: handleFeatureClick,
          }}
        />
      </MapContainer>
    </>
  )
}
