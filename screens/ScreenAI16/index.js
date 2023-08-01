import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.providerPhoto} />
        <Text style={styles.providerName}>Service Provider Name</Text>
        <Text style={styles.serviceDescription}>Service Description</Text>
        <Text style={styles.providerPhoneNumber}>Service Provider Phone Number</Text>
        <Text style={styles.providerAddress}>Service Provider Address</Text>
        <Text style={styles.noOfRatings}>No of Ratings</Text>
        <Text style={styles.workingHours}>Working Hours</Text>
        <Text style={styles.pricePerHour}>Service Price per Hour</Text>
        <Text style={styles.pricePerDay}>Service Price per Day</Text>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        {
        /* Map component */
      }
      </View>
      <View style={styles.section3}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.confirmationImage} />
        <TouchableOpacity style={styles.releaseFundsButton}>
          <Text style={styles.releaseFundsButtonText}>Release Funds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  providerPhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10
  },
  providerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  serviceDescription: {
    fontSize: 16,
    marginBottom: 10
  },
  providerPhoneNumber: {
    fontSize: 16,
    marginBottom: 10
  },
  providerAddress: {
    fontSize: 16,
    marginBottom: 10
  },
  noOfRatings: {
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
  backButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  section2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  section3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirmationImage: {
    width: 300,
    height: 300,
    marginBottom: 10
  },
  releaseFundsButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  releaseFundsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  continueButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
};
export default Screen;