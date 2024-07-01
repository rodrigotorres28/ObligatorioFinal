import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import TeamInBracket from './TeamInBracket';

interface BracketMatchProps {}

const BracketMatch = (props: BracketMatchProps) => {
  return (
    <View style={styles.container}>
        <TeamInBracket flag={require("../assets/flags/uy.png")} teamName='Uruguay' goals={5} toBeDecidedText='Group A 1st'/>
        <View style={styles.divider}/>
        <TeamInBracket toBeDecidedText='Group B 2nd (TBD)'/>
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    marginHorizontal: 15,
    alignSelf: "stretch"
  }
});
