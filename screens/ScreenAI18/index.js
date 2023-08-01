import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const CustomerDetailScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.customerContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.customerPhoto} />
        <Text style={styles.customerName}>John Doe</Text>
        <Text style={styles.customerPhoneNumber}>123-456-7890</Text>
        <Text style={styles.customerAddress}>123 Main St, City, State</Text>
      </View>
      <View style={styles.serviceContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.servicePhoto} />
        <Text style={styles.serviceName}>Plumbing Service</Text>
        <Text style={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo ac nunc tincidunt aliquet.</Text>
      </View>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  customerContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  customerPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  customerPhoneNumber: {
    fontSize: 16,
    marginBottom: 5
  },
  customerAddress: {
    fontSize: 16
  },
  serviceContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  servicePhoto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  serviceDescription: {
    fontSize: 16,
    textAlign: 'center'
  },
  backButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default CustomerDetailScreen;