import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.customerPhoto} />
        <Text style={styles.customerName}>John Doe</Text>
        <Text style={styles.customerDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={styles.customerPhoneNumber}>Phone: 123-456-7890</Text>
        <Text style={styles.customerAddress}>Address: 123 Main St, City, State</Text>
        <Text style={styles.serviceName}>Service: Plumbing</Text>
        <Text style={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <View style={styles.section2}>
        <Text style={styles.mapText}>Map</Text>
      </View>
      <View style={styles.section3}>
        <Text style={styles.stopwatchText}>Stopwatch</Text>
      </View>
      <View style={styles.section4}>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  section1: {
    alignItems: 'center',
    marginTop: 20
  },
  customerPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  customerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  customerDescription: {
    fontSize: 16,
    marginBottom: 10
  },
  customerPhoneNumber: {
    fontSize: 16,
    marginBottom: 10
  },
  customerAddress: {
    fontSize: 16,
    marginBottom: 10
  },
  serviceName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  serviceDescription: {
    fontSize: 16,
    marginBottom: 20
  },
  section2: {
    alignItems: 'center',
    marginBottom: 20
  },
  mapText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  section3: {
    alignItems: 'center',
    marginBottom: 20
  },
  stopwatchText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  section4: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  uploadButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadButtonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  submitButton: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default Screen;