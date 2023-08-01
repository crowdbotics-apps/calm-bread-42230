import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo nec mauris tincidunt, id aliquam nunc tincidunt. Sed auctor
        tincidunt nisl, id lacinia nunc. Nulla facilisi. Sed id nunc
        consectetur, aliquet nunc id, aliquam nunc. Sed auctor tincidunt nisl,
        id lacinia nunc. Nulla facilisi. Sed id nunc consectetur, aliquet nunc
        id, aliquam nunc.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo nec mauris tincidunt, id aliquam nunc tincidunt. Sed auctor
        tincidunt nisl, id lacinia nunc. Nulla facilisi. Sed id nunc
        consectetur, aliquet nunc id, aliquam nunc. Sed auctor tincidunt nisl,
        id lacinia nunc. Nulla facilisi. Sed id nunc consectetur, aliquet nunc
        id, aliquam nunc.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo nec mauris tincidunt, id aliquam nunc tincidunt. Sed auctor
        tincidunt nisl, id lacinia nunc. Nulla facilisi. Sed id nunc
        consectetur, aliquet nunc id, aliquam nunc. Sed auctor tincidunt nisl,
        id lacinia nunc. Nulla facilisi. Sed id nunc consectetur, aliquet nunc
        id, aliquam nunc.
      </Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default PrivacyPolicyScreen;