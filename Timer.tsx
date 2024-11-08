// Timer.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface TimerProps {
  id: number;
  initialTime: number;
  onTimerEnd: (id: number) => void;
}

const Timer: React.FC<TimerProps> = ({ id, initialTime, onTimerEnd }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      onTimerEnd(id);
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{`Timer ${id + 1}: ${time}s`}</Text>
      <Button title={isRunning ? 'Pause' : 'Start'} onPress={handleStartPause} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Timer;
