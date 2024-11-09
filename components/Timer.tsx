// components/Timer.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TimerProps {
  id: number;
  onDelete: () => void;
}

const Timer: React.FC<TimerProps> = ({ id, onDelete }) => {
  const [time, setTime] = useState<number>(60); // Initial countdown time in seconds
  const [customTime, setCustomTime] = useState<string>('60');
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      setIsActive(false);
      Alert.alert("Time's up!", `Timer ${id + 1} has finished.`);
      Vibration.vibrate(500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, id]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTime(parseInt(customTime) || 60);
  };
  const setCustomTimeHandler = () => {
    const parsedTime = parseInt(customTime);
    if (isNaN(parsedTime) || parsedTime <= 0) {
      Alert.alert('Invalid Time', 'Please enter a positive number.');
      return;
    }
    setTime(parsedTime);
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerTitle}>Timer {id + 1}</Text>
      <Text style={styles.timeText}>{time}s</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleTimer} style={styles.iconButton}>
          <Ionicons name={isActive ? "pause" : "play"} size={20} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity onPress={resetTimer} style={styles.iconButton}>
          <Ionicons name="refresh" size={20} color="#FF5722" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
          <Ionicons name="trash" size={20} color="#FF0000" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        value={customTime}
        onChangeText={setCustomTime}
        keyboardType="numeric"
        placeholder="Set Time (s)"
        onBlur={setCustomTimeHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    padding: 10,
    margin: 8,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    width: '45%',
    alignItems: 'center',
  },
  timerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  iconButton: {
    marginHorizontal: 6,
  },
  input: {
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    textAlign: 'center',
    marginTop: 6,
    color: '#333',
  },
});

export default Timer;
