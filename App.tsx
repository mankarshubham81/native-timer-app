// App.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import Timer from './Timer';

const App: React.FC = () => {
  const [timers, setTimers] = useState<{ id: number; initialTime: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  const addTimer = () => {
    if (timers.length >= 5) {
      Alert.alert('Limit Reached', 'You can only add up to 5 timers.');
      return;
    }
    const initialTime = 60; // default 1 minute, could be user input
    setTimers([...timers, { id: nextId, initialTime }]);
    setNextId(nextId + 1);
  };

  const removeTimer = (id: number) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  const handleTimerEnd = (id: number) => {
    Alert.alert('Timer Finished', `Timer ${id + 1} has ended.`);
    removeTimer(id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Timer App</Text>
      <Button title="Add Timer" onPress={addTimer} />
      {timers.map((timer) => (
        <Timer key={timer.id} id={timer.id} initialTime={timer.initialTime} onTimerEnd={handleTimerEnd} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default App;
