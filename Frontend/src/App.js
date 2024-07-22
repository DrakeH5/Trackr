import * as React from 'react';
import Map, {NavigationControl} from 'react-map-gl';
import Navbar from './components/navbar.js';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: -97,
          latitude: 35,
          zoom: 3.5
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/adea6d0e-2d7e-454f-bb4b-7d29f97f7600/style.json?key=JmXBghQQLs4ZM5NeVxab"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}

export default App;
