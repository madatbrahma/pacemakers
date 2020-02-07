import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import PaceMakersAppNavigator from './navigation/PaceMakersAppNavigator';



export default function App() {
  return <PaceMakersAppNavigator/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
