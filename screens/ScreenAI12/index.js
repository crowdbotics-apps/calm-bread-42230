import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

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
        <TextInput style={styles.searchInput} placeholder="Search" />
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter Categories</Text>
          {
          /* Add dropdown component here */
        }
        </View>
        <Text style={styles.sortText}>Sort By:</Text>
        <View style={styles.sortOptionsContainer}>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Oldest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Price</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption}>
            <Text style={styles.sortOptionText}>Available Quantity</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section3}>
        {
        /* Add location distance preference slider here */
      }
        <Text style={styles.locationText}>Only show services in this range of location</Text>
      </View>
      <View style={styles.section4}>
        {
        /* Add list of services here */
      }
        <TouchableOpacity style={styles.serviceItem}>
          <Text style={styles.serviceItemText}>Select Specific service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceDetailButton}>
          <Text style={styles.serviceDetailButtonText}>Service Detail Page</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section5}>
        <TouchableOpacity style={styles.historyButton}>
          <Text style={styles.historyButtonText}>Request history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calendarButton}>
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
    paddingHorizontal: 20,
    paddingTop: 20
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  locationText: {
    fontSize: 16
  },
  notificationIcon: {// Add styles for notification icon
  },
  logoutButton: {// Add styles for logout button
  },
  logoutButtonText: {// Add styles for logout button text
  },
  section2: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  searchInput: {// Add styles for search input
  },
  filterContainer: {// Add styles for filter container
  },
  filterText: {// Add styles for filter text
  },
  sortText: {// Add styles for sort text
  },
  sortOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  sortOption: {// Add styles for sort option
  },
  sortOptionText: {// Add styles for sort option text
  },
  section3: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  section4: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  serviceItem: {// Add styles for service item
  },
  serviceItemText: {// Add styles for service item text
  },
  serviceDetailButton: {// Add styles for service detail button
  },
  serviceDetailButtonText: {// Add styles for service detail button text
  },
  section5: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40
  },
  historyButton: {// Add styles for history button
  },
  historyButtonText: {// Add styles for history button text
  },
  calendarButton: {// Add styles for calendar button
  },
  calendarButtonText: {// Add styles for calendar button text
  },
  homeButton: {// Add styles for home button
  },
  homeButtonText: {// Add styles for home button text
  },
  settingsButton: {// Add styles for settings button
  },
  settingsButtonText: {// Add styles for settings button text
  }
};
export default Screen;