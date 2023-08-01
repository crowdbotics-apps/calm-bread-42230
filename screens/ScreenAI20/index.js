import React from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const ServiceProviderDetailScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.photo} />
      <Text style={styles.name}>Service Provider Name</Text>
      <Text style={styles.bio}>Service Provider Bio</Text>
      <Text style={styles.phoneNumber}>Phone Number</Text>
      <Text style={styles.address}>Address</Text>
      <Text style={styles.ratings}>No of Ratings</Text>
      <Text style={styles.workingHours}>Working Hours</Text>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Direct Message</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  bio: {
    fontSize: 16,
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
  ratings: {
    fontSize: 16,
    marginBottom: 10
  },
  workingHours: {
    fontSize: 16,
    marginBottom: 20
  },
  backButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  backButtonText: {
    fontSize: 16,
    color: '#fff'
  },
  messageButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  messageButtonText: {
    fontSize: 16,
    color: '#fff'
  }
};
export default ServiceProviderDetailScreen;