import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const ReportScreen = () => {
  const handleReport = reason => {
    // Logic to flag the post and notify the admin
    console.log(`Reported for: ${reason}`);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Why are you reporting this?</Text>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Spam')}>
        <Text style={styles.reasonText}>Spam</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Pornography')}>
        <Text style={styles.reasonText}>Pornography</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Hatred and bullying')}>
        <Text style={styles.reasonText}>Hatred and bullying</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Self-harm')}>
        <Text style={styles.reasonText}>Self-harm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Violent, gory, and harmful content')}>
        <Text style={styles.reasonText}>Violent, gory, and harmful content</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Child porn')}>
        <Text style={styles.reasonText}>Child porn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Illegal activities (e.g. drug use)')}>
        <Text style={styles.reasonText}>Illegal activities (e.g. drug use)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Deceptive content')}>
        <Text style={styles.reasonText}>Deceptive content</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Copyright and trademark infringement')}>
        <Text style={styles.reasonText}>Copyright and trademark infringement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reasonButton} onPress={() => handleReport('Other')}>
        <Text style={styles.reasonText}>Other</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reportButton} onPress={() => handleReport('Report')}>
        <Text style={styles.reportButtonText}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => handleReport('Cancel')}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  reasonButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  reasonText: {
    fontSize: 16
  },
  reportButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#ff0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  reportButtonText: {
    fontSize: 16,
    color: '#fff'
  },
  cancelButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  cancelButtonText: {
    fontSize: 16
  }
};
export default ReportScreen;