// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, Alert, Vibration, TouchableOpacity } from 'react-native';
// import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

// interface TimerProps {
//   id: number;
//   initialTime: number;
//   onTimerEnd: (id: number) => void;
// }

// const Timer: React.FC<TimerProps> = ({ id, initialTime, onTimerEnd }) => {
//   const [time, setTime] = useState(initialTime);
//   const [isRunning, setIsRunning] = useState(false);
//   const [customTime, setCustomTime] = useState('');
//   const [inputEnabled, setInputEnabled] = useState(true);

//   useEffect(() => {
//     let interval: NodeJS.Timeout | null = null;

//     if (isRunning && time > 0) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (time === 0 && isRunning) {
//       Vibration.vibrate(500);
//       Alert.alert(`Timer ${id + 1} Complete`, `Timer ${id + 1} has finished!`);
//       onTimerEnd(id);
//       setIsRunning(false);
//       setInputEnabled(true);
//     }

//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isRunning, time]);

//   const handleStartPause = () => {
//     if (time > 0) {
//       setIsRunning(!isRunning);
//       setInputEnabled(false);
//     }
//   };

//   const handleReset = () => {
//     setTime(initialTime);
//     setIsRunning(false);
//     setInputEnabled(true);
//   };

//   const handleSetCustomTime = () => {
//     const newTime = parseInt(customTime, 10);
//     if (isNaN(newTime) || newTime <= 0) {
//       Alert.alert('Invalid Input', 'Please enter a positive number greater than zero.');
//     } else {
//       setTime(newTime);
//       setInputEnabled(false);
//       setCustomTime('');
//     }
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
//     const secs = (seconds % 60).toString().padStart(2, '0');
//     return `${mins}:${secs}`;
//   };

//   return (
//     <View style={[styles.timerContainer, isRunning ? styles.running : styles.paused]}>
//       <Text style={styles.timerText}>{`Timer ${id + 1}`}</Text>
//       <Text style={styles.timeDisplay}>{formatTime(time)}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter time (s)"
//         value={customTime}
//         onChangeText={setCustomTime}
//         editable={inputEnabled}
//         keyboardType="numeric"
//       />
//       <View style={styles.iconRow}>
//         <TouchableOpacity onPress={handleStartPause} style={styles.iconButton}>
//           {isRunning ? (
//             <Entypo name="controller-paus" size={24} color="black" />
//           ) : (
//             <Entypo name="controller-play" size={24} color="black" />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleReset} style={styles.iconButton}>
//           <FontAwesome name="repeat" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleSetCustomTime} style={styles.iconButton} disabled={!inputEnabled}>
//           <MaterialIcons name="timer" size={24} color={inputEnabled ? "black" : "gray"} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   timerContainer: {
//     flex: 1,
//     padding: 12,
//     margin: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//     backgroundColor: '#f2f4f8',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     width: '45%',
//     borderColor: '#d4d4d4',
//     borderWidth: 1,
//   },
//   running: {
//     borderColor: '#4a90e2',
//   },
//   paused: {
//     borderColor: '#d4d4d4',
//   },
//   timerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#4b4b4b',
//     marginBottom: 8,
//   },
//   timeDisplay: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: '#bfbfbf',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     textAlign: 'center',
//     marginBottom: 12,
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 8,
//   },
//   iconButton: {
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
// });

// export default Timer;
