/* code from textbook */
import React from "react";
import { View, StatusBar } from "react-native";
import MapView from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default () => (
  <View style={styles.container}>
    <MapView style={styles.mapView} showsUserLocation
      followUserLocation />
  </View>
); 

/* comment out the template

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
