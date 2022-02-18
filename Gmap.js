import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Gmap = ({location}) => {
  
  useEffect(() => {
    if (!location) {
      
    }else{
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
    }
  }, [location])


  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
      // Map component
      <MapView
        style={{ alignSelf: 'stretch', height: '80%' }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker'></Marker>
      </MapView>
      
    
  );
};
export default Gmap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});