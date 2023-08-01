import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const TimerScreen = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [accumulatedTime, setAccumulatedTime] = useState(0);

  const handleStartTimer = () => {
    setIsTimerRunning(true);
    setStartTime(Date.now());
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
    setEndTime(Date.now());
    const elapsedTime = endTime - startTime;
    setAccumulatedTime(accumulatedTime + elapsedTime);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{accumulatedTime} ms</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={isTimerRunning ? handleStopTimer : handleStartTimer}>
        <Text style={styles.buttonText}>
          {isTimerRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  timerContainer: {
    marginBottom: 20
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default TimerScreen;