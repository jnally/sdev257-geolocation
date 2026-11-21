/* Module 04 Assignment - Geo-location */
import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
  // Store user's current GPS coordinates
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  // Wait for permission then get current location
  useEffect(() => {
    function setPosition({ coords: { latitude, longitude } }) {
      setLatitude(latitude);
      setLongitude(longitude);
    }

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const currentLocation = await Location.getCurrentPositionAsync();
        setPosition(currentLocation);
      }
    })();
  }, []);

  // Wait for GPS coordinates before rendering map
  if (!latitude || !longitude) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {/* Highlight one nearby restaurant */}
        <Marker
          title="Salvatori's New Haven"
          description="Original Salvatori's Italian restaurant."
          coordinate={{
            latitude: 41.06255967135679,
            longitude: -84.98182383362749,
          }}
        />
      </MapView>
    </View>
  );
}