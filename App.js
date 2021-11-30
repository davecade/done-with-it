import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>BLACKPINK IN YA AREA</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    padding: "20 10"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: "pink",
    fontWeight: "bold"
  }
});
