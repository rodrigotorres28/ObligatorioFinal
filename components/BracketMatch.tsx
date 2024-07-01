import * as React from "react";
import { View, StyleSheet } from "react-native";
import BracketTeam from "./BracketTeam";
import { TeamInBracket } from "../types/TeamInBracket";

interface BracketMatchProps {
  bracketTeam1: TeamInBracket;
  bracketTeam2: TeamInBracket;
}

const BracketMatch = ({ bracketTeam1, bracketTeam2 }: BracketMatchProps) => {
  return (
    <View style={styles.container}>
      <BracketTeam
        flag={bracketTeam1.flag}
        teamName={bracketTeam1.name}
        goals={bracketTeam1.goals}
        toBeDecidedText={bracketTeam1.toBeDecidedText}
      />
      <View style={styles.divider} />
      <BracketTeam
        flag={bracketTeam2.flag}
        teamName={bracketTeam2.name}
        goals={bracketTeam2.goals}
        toBeDecidedText={bracketTeam2.toBeDecidedText}
      />
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
    alignSelf: "stretch",
  },
});
