import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const ConfirmationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Are you sure you want to perform the chosen action?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Yes button pressed')}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Cancel button pressed')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ConfirmationScreen;