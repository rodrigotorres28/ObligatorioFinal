import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BracketMatchProps {}

const BracketMatch = (props: BracketMatchProps) => {
  return (
    <View style={styles.container}>
    </View>
  );
};

export default BracketMatch;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 225,
    borderRadius: 10,
    marginVertical: 16,
    marginHorizontal: 10,
    backgroundColor: "skyblue",
    borderColor: "black",
    borderWidth: 2,
  }
});
