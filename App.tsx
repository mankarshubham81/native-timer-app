import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, FlatList } from 'react-native';
import Timer from './Timer';

const App: React.FC = () => {
  const [timers, setTimers] = useState<{ id: number; initialTime: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  const addTimer = () => {
    if (timers.length >= 5) {
      Alert.alert('Limit Reached', 'You can only add up to 5 timers.');
      return;
    }
    setTimers([...timers, { id: nextId, initialTime: 60 }]);
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
    <View style={styles.container}>
      <Text style={styles.title}>Multi-Timer App</Text>
      <Button title="Add Timer" onPress={addTimer} />
      <FlatList
        data={timers}
        renderItem={({ item }) => (
          <Timer key={item.id} id={item.id} initialTime={item.initialTime} onTimerEnd={handleTimerEnd} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.timerGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EDEDED',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B4B4B',
    textAlign: 'center',
    marginBottom: 20,
  },
  timerGrid: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default App;
