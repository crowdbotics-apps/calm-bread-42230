import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>New Service</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Service Name</Text>
        <TextInput style={styles.input} placeholder="Enter service name" />

        <Text style={styles.label}>Service Category</Text>
        <TextInput style={styles.input} placeholder="Select service category" />

        <Text style={styles.label}>Upload Service Image</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Service Description</Text>
        <TextInput style={styles.input} placeholder="Enter service description" />

        <Text style={styles.label}>Price per Hour</Text>
        <TextInput style={styles.input} placeholder="Enter price per hour" />

        <Text style={styles.label}>Price per Day</Text>
        <TextInput style={styles.input} placeholder="Enter price per day" />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit & Upload</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  formContainer: {
    flex: 1
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  uploadButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  saveButton: {
    backgroundColor: '#4CD964',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  submitButton: {
    backgroundColor: '#FF9500',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default Screen;