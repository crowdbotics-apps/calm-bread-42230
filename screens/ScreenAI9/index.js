import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity style={styles.uploadButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload National ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  uploadIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  uploadText: {
    fontSize: 16,
    color: '#333'
  },
  submitButton: {
    backgroundColor: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff'
  }
};
export default Screen;