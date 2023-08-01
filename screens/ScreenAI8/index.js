import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.message}>Are you a freelancer or business entity?</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Freelancer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Business entity</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.confirmMessage}>Are you sure?</Text>
        <View style={styles.confirmOptions}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section2}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TextInput style={styles.nameInput} placeholder="Personal Name" />
        <TextInput style={styles.phoneInput} placeholder="Phone Number" />
        <View style={styles.locationContainer}>
          <TextInput style={styles.addressInput} placeholder="Street Address" />
          <TextInput style={styles.cityInput} placeholder="City" />
          <TextInput style={styles.zipCodeInput} placeholder="Zip Code" />
          <TextInput style={styles.stateInput} placeholder="State" />
        </View>
        <TextInput style={styles.bioInput} placeholder="About Service Provider" multiline maxLength={250} />
      </View>
      <View style={styles.section3}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.companyImage} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TextInput style={styles.companyNameInput} placeholder="Company Name" />
        <TextInput style={styles.dateInput} placeholder="Date of Incorporation" />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TextInput style={styles.phoneInput} placeholder="Phone Number" />
        <View style={styles.locationContainer}>
          <TextInput style={styles.addressInput} placeholder="Street Address" />
          <TextInput style={styles.cityInput} placeholder="City" />
          <TextInput style={styles.zipCodeInput} placeholder="Zip Code" />
          <TextInput style={styles.stateInput} placeholder="State" />
        </View>
        <TextInput style={styles.bioInput} placeholder="About Company" multiline maxLength={250} />
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  section1: {
    marginTop: 20
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  options: {
    flexDirection: 'row',
    marginTop: 10
  },
  optionButton: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5
  },
  optionText: {
    fontSize: 16,
    color: '#333'
  },
  confirmMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  confirmOptions: {
    flexDirection: 'row',
    marginTop: 10
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#333'
  },
  section2: {
    marginTop: 20,
    alignItems: 'center'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  addButton: {
    backgroundColor: '#ccc',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  addButtonText: {
    fontSize: 20,
    color: '#333'
  },
  nameInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  phoneInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  locationContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10
  },
  addressInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5
  },
  cityInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5
  },
  zipCodeInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5
  },
  stateInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  bioInput: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlignVertical: 'top'
  },
  section3: {
    marginTop: 20,
    alignItems: 'center'
  },
  companyImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  companyNameInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  dateInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  continueButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20
  },
  continueButtonText: {
    fontSize: 16,
    color: '#333'
  }
};
export default ScreenComponent;