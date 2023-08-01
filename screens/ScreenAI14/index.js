import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const AppointmentScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Appointment History</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Upcoming appointments</Text>
        <View style={styles.appointmentItem}>
          <Text style={styles.appointmentText}>Appointment 1</Text>
        </View>
        <View style={styles.appointmentItem}>
          <Text style={styles.appointmentText}>Appointment 2</Text>
        </View>
        <Text style={styles.sectionTitle}>Past appointments</Text>
        <View style={styles.appointmentItem}>
          <Text style={styles.appointmentText}>Appointment 3</Text>
        </View>
        <View style={styles.appointmentItem}>
          <Text style={styles.appointmentText}>Appointment 4</Text>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 16
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  appointmentItem: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8
  },
  appointmentText: {
    fontSize: 14
  }
};
export default AppointmentScreen;