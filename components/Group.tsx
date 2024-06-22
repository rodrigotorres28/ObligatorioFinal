import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

interface GroupProps {}

const Group = (props: GroupProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/groupsBackground.jpg")} style={styles.image}>
      <Text style={styles.titleText}>GRUPO A</Text>
      </ImageBackground>
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: 170,
    backgroundColor: "skyblue"
  },
  image: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    color: "white",
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
    textShadowColor: "black",
    textShadowOffset: {height: 8, width: 0},
    textShadowRadius: 10,
  },
});
