import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Set My Current Location</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.input} placeholder="Enter your location" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput style={styles.input} placeholder="Enter your city" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ZIP</Text>
        <TextInput style={styles.input} placeholder="Enter your ZIP code" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>State (optional)</Text>
        <TextInput style={styles.input} placeholder="Enter your state" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Country</Text>
        <TextInput style={styles.input} placeholder="Select your country" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
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
    marginBottom: 20
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
};
export default Screen;