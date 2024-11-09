// App.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import TimerApp from './components/TimerApp';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TimerApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
