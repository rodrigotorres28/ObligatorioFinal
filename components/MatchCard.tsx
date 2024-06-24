import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TeamInGroup } from "../types/TeamInGroup";
import { Match } from "../types/Match";

interface MatchCardProps {
  groupTeams: TeamInGroup[];
  match: Match
}

const MatchCard = ({ groupTeams, match }: MatchCardProps) => {
  const goalsLeft = match.team1Goals
  const goalsRight = match.team2Goals
  
  const team1 = groupTeams.find(team => team.teamId === match.team1Id);
  const team2 = groupTeams.find(team => team.teamId === match.team2Id);

  if (!team1 || !team2) {
    console.error("Team id from a match not found on it's group")
    return null;
  }

  const team1Name = team1.name;
  const team2Name = team2.name;
  const team1Flag = team1.flag;
  const team2Flag = team2.flag;

  return (
    <View style={styles.container}>
      <View style={styles.teamLeft}>
        <Image style={styles.flags} source={team1Flag} />
        <Text style={styles.names}>{team1Name}</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.goals}>{goalsLeft != -1 ? goalsLeft : " - "}</Text>
        <MaterialCommunityIcons name="soccer" size={20} color={"white"} />
        <Text style={styles.goals}>{goalsRight != -1 ? goalsRight : " - "}</Text>
      </View>
      <View style={styles.teamRight}>
        <Text style={styles.names}>{team2Name}</Text>
        <Image style={styles.flags} source={team2Flag} />
      </View>
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "#0565e3",
    marginVertical: 5,
  },
  flags: {
    width: 28,
    height: 21,
    marginHorizontal: 8,
  },
  names: {
    fontSize: 18,
    color: "white",
  },
  teamLeft: {
    flexDirection: "row",
    marginRight: 5,
    alignItems: "center",
    width: 135,
  },
  teamRight: {
    flexDirection: "row",
    marginLeft: 5,
    alignItems: "center",
    width: 135,
    justifyContent: "flex-end"
  },
  middle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
  },
  goals:{
    fontSize: 28,
    lineHeight: 31,
    color: "white",
    marginHorizontal: 5,
  },
});
