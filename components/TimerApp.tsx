// components/TimerApp.tsx
import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';
import Timer from './Timer';

const TimerApp: React.FC = () => {
  const [timers, setTimers] = useState<{ id: number }[]>([]);
  const [nextId, setNextId] = useState(0); // Initialize unique ID counter
  const [showLimitMessage, setShowLimitMessage] = useState(false);

  const addTimer = () => {
    if (timers.length < 5) {
      setTimers([...timers, { id: nextId }]); // Assign unique ID to each timer
      setNextId(nextId + 1); // Increment the counter for the next timer
    } else {
      setShowLimitMessage(true);
      setTimeout(() => setShowLimitMessage(false), 2000);
    }
  };

  const deleteTimer = (id: number) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Multi-Timer App</Text>
      <Button title="Add Timer" onPress={addTimer} />
      {showLimitMessage && <Text style={styles.limitText}>Maximum of 5 timers reached</Text>}
      <ScrollView contentContainerStyle={styles.timersContainer}>
        <View style={styles.gridContainer}>
          {timers.map(({ id }) => (
            <Timer key={id} id={id} onDelete={() => deleteTimer(id)} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  timersContainer: {
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  limitText: {
    color: '#FF5722',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default TimerApp;
