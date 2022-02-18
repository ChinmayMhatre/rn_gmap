import React, {useState}from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import Gmap from './Gmap';




const App = () => {

  const [location, setLocation] = useState(null);
  const requestPermissions = async () => {
  
    const {status} = await Location.requestForegroundPermissionsAsync();
    console.log(status)
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords);
      setLocation(location);

    }
  };



  return (
  <View style={styles.container}>

    <TouchableOpacity onPress={requestPermissions} style={styles.button}>
      <Text>Get current location </Text>
    </TouchableOpacity>
    <Gmap location = {location} />
  
  </View>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 3,
  }

});