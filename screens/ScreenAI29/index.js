import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ServiceScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.serviceName}>Service Name</Text>
        <Text style={styles.phoneNumber}>Service provider phone number</Text>
        <Text style={styles.address}>Address</Text>
        <Text style={styles.workingHours}>Working hours</Text>
        <Text style={styles.pricePerHour}>Service Price per hour</Text>
        <Text style={styles.pricePerDay}>Service Price per day</Text>
        <Text style={styles.description}>Service Description</Text>
        <Text style={styles.averageRating}>Average rating</Text>
        <Text style={styles.numberRating}>Number rating</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Service provider detail page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  serviceName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 10
  },
  address: {
    fontSize: 16,
    marginBottom: 10
  },
  workingHours: {
    fontSize: 16,
    marginBottom: 10
  },
  pricePerHour: {
    fontSize: 16,
    marginBottom: 10
  },
  pricePerDay: {
    fontSize: 16,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  averageRating: {
    fontSize: 16,
    marginBottom: 10
  },
  numberRating: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ServiceScreen;