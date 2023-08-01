import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.welcomeText}>Welcome (User's Full Name)</Text>
        <View style={styles.profileContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.profileImage} />
          <Text style={styles.locationText}>Location</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          {
          /* Add notification icon here */
        }
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <Text style={styles.distanceText}>Location Distance preference slider</Text>
        <Text style={styles.distanceRangeText}>Only show customers in this range of location</Text>
      </View>
      <View style={styles.section3}>
        <Text style={styles.marketplaceText}>Marketplace</Text>
        <Text style={styles.serviceText}>List of all service (Dropdown)</Text>
        <TouchableOpacity style={styles.selectItemButton}>
          <Text style={styles.selectItemButtonText}>Select Specific Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addServiceButton}>
          <Text style={styles.addServiceButtonText}>Add New service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestHistoryButton}>
          <Text style={styles.requestHistoryButtonText}>Request history</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section4}>
        <TouchableOpacity style={styles.requestHistoryButton}>
          <Text style={styles.requestHistoryButtonText}>Request history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calendarButton}>
          <Text style={styles.calendarButtonText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.walletButton}>
          <Text style={styles.walletButtonText}>Wallet</Text>
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  locationText: {
    fontSize: 16
  },
  notificationIcon: {
    alignSelf: 'flex-end',
    marginRight: 10
  },
  logoutButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end'
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  section2: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  distanceText: {
    fontSize: 16,
    marginBottom: 10
  },
  distanceRangeText: {
    fontSize: 14,
    color: '#888'
  },
  section3: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  marketplaceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  serviceText: {
    fontSize: 16,
    marginBottom: 10
  },
  selectItemButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  selectItemButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  addServiceButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  addServiceButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  requestHistoryButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  requestHistoryButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  section4: {
    padding: 20
  },
  calendarButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  calendarButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  walletButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  walletButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  homeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  settingsButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  settingsButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
};
export default Screen;