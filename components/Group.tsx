import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, ImageSourcePropType } from 'react-native';
import TeamGroupItem from './TeamGroupItem';

interface Team {
  id: string;
  name: string;
  flag: ImageSourcePropType;
}
interface GroupProps {
  name: string;
  teams: Team[];
}

const Group = ({name, teams}: GroupProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/groupsBackground.jpg")}
        style={styles.image}
      >
        <Text style={styles.titleText}>{name}</Text>
        {teams.map((team) => (
          <TeamGroupItem key={team.id} name={team.name} flag={team.flag} />
        ))}
      </ImageBackground>
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: 170,
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "white",
    padding: 10,
    fontSize: 24,
    fontWeight: '600',
    textShadowColor: "black",
    textShadowOffset: {height: 4, width: 0},
    textShadowRadius: 10,
  },
});
