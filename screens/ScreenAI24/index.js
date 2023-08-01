import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sender's Full Name</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Conversation History</Text>
        <View style={styles.messageContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.avatar} />
          <View style={styles.messageContent}>
            <Text style={styles.messageSender}>Sender's Name</Text>
            <Text style={styles.messageText}>Specific message</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Write Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Emoji</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  backButton: {
    marginRight: 16
  },
  backButtonText: {
    fontSize: 16,
    color: '#333'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    flex: 1,
    padding: 16
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16
  },
  messageContent: {
    flex: 1
  },
  messageSender: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  messageText: {
    fontSize: 14,
    color: '#666'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
};
export default Screen;