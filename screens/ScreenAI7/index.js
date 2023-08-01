import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleSaveChanges = () => {// Save changes logic here
  };

  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} editable={editMode} />
      <TextInput style={styles.input} placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} editable={editMode} />
      <Text style={styles.sectionTitle}>Location</Text>
      <TextInput style={styles.input} placeholder="Street Address" value={streetAddress} onChangeText={setStreetAddress} editable={editMode} />
      <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity} editable={editMode} />
      <TextInput style={styles.input} placeholder="Zip Code" value={zipCode} onChangeText={setZipCode} editable={editMode} />
      <TextInput style={styles.input} placeholder="State" value={state} onChangeText={setState} editable={editMode} />
      {editMode ? <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity> : <TouchableOpacity style={styles.editButton} onPress={() => setEditMode(true)}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>}
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },
  editButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 16
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  saveButton: {
    backgroundColor: '#4CD964',
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 16
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
};
export default Screen;