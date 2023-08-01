import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const MapScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.mapImage} />
      </View>
      <View style={styles.zoomContainer}>
        <Text style={styles.zoomText}>Zoom In</Text>
        <Text style={styles.zoomText}>Zoom Out</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  zoomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  zoomText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default MapScreen;