import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const CalendarScreen = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');

  const handleBookAppointment = () => {// Logic to book appointment
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Year</Text>
        <Text style={styles.text}>{year}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Month</Text>
        <Text style={styles.text}>{month}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Day</Text>
        <Text style={styles.text}>{day}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {// Logic to display appointments
    }}>
        <Text style={styles.buttonText}>Display Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {// Logic to navigate to Customer user type
    }}>
        <Text style={styles.buttonText}>Clickable to the Customer user type</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.title}>Available Appointment</Text>
        <Text style={styles.text}>Time</Text>
        <Text style={styles.text}>From (time picker)</Text>
        <Text style={styles.text}>To (time picker)</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
        <Text style={styles.buttonText}>Book appointment</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 16
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
};
export default CalendarScreen;