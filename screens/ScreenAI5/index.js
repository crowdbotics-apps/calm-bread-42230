import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, SafeAreaView } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSignUp = () => {// Handle sign up logic here
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

      <Text style={styles.message}>Please choose the type of account you wish to create</Text>

      <TouchableOpacity style={styles.userTypeButton}>
        <Text style={styles.userTypeButtonText}>Customer user type</Text>
      </TouchableOpacity>

      <View style={styles.confirmContainer}>
        <Text style={styles.confirmText}>Are you sure?</Text>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>No</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.userTypeButton}>
        <Text style={styles.userTypeButtonText}>Service provider user type</Text>
      </TouchableOpacity>

      <View style={styles.confirmContainer}>
        <Text style={styles.confirmText}>Are you sure?</Text>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>No</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInput style={styles.input} placeholder="Set password" secureTextEntry value={password} onChangeText={setPassword} />

      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

      <View style={styles.checkboxContainer}>
        <CheckBox value={termsChecked} onValueChange={setTermsChecked} />
        <Text style={styles.checkboxText}>I have read Terms and Conditions and Privacy Policy</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI4");
    }}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI3");
    }}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  userTypeButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  userTypeButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  confirmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  confirmText: {
    fontSize: 16,
    marginRight: 10
  },
  confirmButton: {
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10
  },
  button: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default SignUpScreen;