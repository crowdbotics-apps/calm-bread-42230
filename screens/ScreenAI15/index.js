import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Appointment History</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming appointments</Text>
        <TouchableOpacity style={styles.appointmentItem}>
          <Text style={styles.appointmentText}>Select specific appointment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Past appointments</Text>
        <TouchableOpacity style={styles.appointmentItem}>
          <Text style={styles.appointmentText}>Select specific appointment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pending requests</Text>
        <TouchableOpacity style={styles.appointmentItem}>
          <Text style={styles.appointmentText}>Select specific appointment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineButton}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30
  },
  section: {
    marginBottom: 30
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  appointmentItem: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5
  },
  appointmentText: {
    fontSize: 16,
    color: '#333'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  acceptButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  declineButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
};
export default Screen;