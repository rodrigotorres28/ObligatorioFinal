import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import TeamGroupItem from "./TeamGroupItem";
import { Team } from "../types/Team";

interface GroupPreviewProps {
  name: string;
  teams: Team[];
}

const GroupPreview = ({ name, teams }: GroupPreviewProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/groupsBackground.jpg")}
        style={styles.image}
      >
        <Text style={styles.titleText}>{name}</Text>
        {teams.map((team) => (
          <TeamGroupItem key={team.teamId} name={team.name} flag={team.flag} />
        ))}
      </ImageBackground>
    </View>
  );
};

export default GroupPreview;

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: 170,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "white",
    padding: 10,
    fontSize: 24,
    fontWeight: "600",
    textShadowColor: "black",
    textShadowOffset: { height: 4, width: 0 },
    textShadowRadius: 10,
  },
});
