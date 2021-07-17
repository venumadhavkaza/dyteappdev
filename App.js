import { StatusBar } from 'expo-status-bar';
import React,{useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import Navigator from './routes/homestack'

export default function App() {
  
  return (
    <Navigator/>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
