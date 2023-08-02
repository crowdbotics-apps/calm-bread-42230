import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.welcomeText}>Welcome (User's Full Name)</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <TouchableOpacity style={styles.notificationIcon}>
          {
          /* Add notification icon here */
        }
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationButton} onPress={() => {
        navigation.navigate("ScreenAI10");
      }}>
          <Text style={styles.locationButtonText}>Set location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <View style={styles.filterDropdown}>
          {
          /* Add filter dropdown here */
        }
        </View>
        <Text style={styles.filterText}>Newest</Text>
        <Text style={styles.filterText}>Oldest</Text>
        <Text style={styles.filterText}>Price</Text>
        <Text style={styles.filterText}>Available Quantity</Text>
      </View>
      <View style={styles.section3}>
        {
        /* Add location distance preference slider here */
      }
      </View>
      <View style={styles.section4}>
        <View style={styles.serviceItem}>
          <Text style={styles.serviceName}>Specific Service</Text>
          <Text style={styles.serviceDescription}>Name</Text>
          <Text style={styles.serviceDescription}>Description</Text>
          <Text style={styles.serviceDescription}>Price per hour</Text>
          <Text style={styles.serviceDescription}>Price per day</Text>
          <TouchableOpacity style={styles.selectServiceButton} onPress={() => {
          navigation.navigate("ScreenAI16");
        }}>
            <Text style={styles.selectServiceButtonText}>Select Specific service</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section5}>
        <TouchableOpacity style={styles.historyButton} onPress={() => {
        navigation.navigate("ScreenAI14");
      }}>
          <Text style={styles.historyButtonText}>Request history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calendarButton} onPress={() => {
        navigation.navigate("ScreenAI22");
      }}>
          <Text style={styles.calendarButtonText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  notificationIcon: {// Add styles for notification icon
  },
  locationButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8
  },
  locationButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 8
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  section2: {
    padding: 16
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16
  },
  filterDropdown: {// Add styles for filter dropdown
  },
  filterText: {
    marginBottom: 8
  },
  section3: {
    padding: 16
  },
  section4: {
    padding: 16
  },
  serviceItem: {
    marginBottom: 16
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  serviceDescription: {
    marginBottom: 4
  },
  selectServiceButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8
  },
  selectServiceButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  section5: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16
  },
  historyButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8
  },
  historyButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  calendarButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8
  },
  calendarButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  homeButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  settingsButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8
  },
  settingsButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
};
export default Screen;