import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const ReviewScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rate Service Provider</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam, nunc id aliquet lacinia, nunc nunc tincidunt nunc, vitae
          aliquam nunc nunc id.
        </Text>
        <View style={styles.ratingContainer}>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingText}>1 Star</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingText}>2 Stars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingText}>3 Stars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingText}>4 Stars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingText}>5 Stars</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewButtonText}>Leave a Review</Text>
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
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16
  },
  description: {
    textAlign: 'center',
    marginBottom: 16
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  ratingButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginRight: 8
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  reviewButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007bff',
    borderRadius: 8
  },
  reviewButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
};
export default ReviewScreen;