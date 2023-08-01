import React from 'react';
import { View, Text, Image, TextInput, SafeAreaView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileUsername}>@johndoe</Text>
        <Text style={styles.lastMessageTimestamp}>Last message: 2 hours ago</Text>
      </View>
      <View style={styles.conversationsContainer}>
        <Text style={styles.conversationsTitle}>My Conversations</Text>
        {
        /* List of conversations */
      }
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 16
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8
  },
  profileUsername: {
    fontSize: 16,
    color: '#888',
    marginTop: 4
  },
  lastMessageTimestamp: {
    fontSize: 14,
    color: '#888',
    marginTop: 4
  },
  conversationsContainer: {
    flex: 1,
    marginTop: 16
  },
  conversationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  searchContainer: {
    marginBottom: 16
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16
  }
});
export default ProfileScreen;