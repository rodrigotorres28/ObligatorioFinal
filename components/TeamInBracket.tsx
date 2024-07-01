import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface TeamInBracketProps {
    flag?: ImageSourcePropType;
    teamName?: string;
    goals?: number;
    toBeDecidedText: string;
}

const TeamInBracket = ({ flag, teamName, goals, toBeDecidedText }: TeamInBracketProps) => {
    if (flag && teamName && goals){
      return (
        <View style={styles.container}>
          <View style={styles.teamInfo}>
            <Image
              style={styles.flagImage}
              source={flag}
            />
            <Text style={styles.text}>{teamName}</Text>
          </View>
          <View style={styles.goalsContainer}>
            <View style={styles.verticalDivider} />
            <Text style={styles.text}>{goals}</Text>
          </View>
        </View>
      );
    }
    else {
        return (
          <View style={styles.container}>
            <View style={styles.teamInfo}>
              <Text style={styles.text}>{toBeDecidedText}</Text>
            </View>
            <View style={styles.goalsContainer}>
              <View style={styles.verticalDivider} />
              <Text style={styles.text}> </Text>
            </View>
          </View>
        );
    }
};

export default TeamInBracket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 15,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  goalsContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    paddingVertical: 7,
    width: 32,
  },
  flagImage: {
    height: 25,
    width: 30,
    marginHorizontal: 7,
  },
  verticalDivider: {
    flexDirection: "row",
    width: 1,
    backgroundColor: "black",
    alignSelf: "stretch",
    marginRight: 7,
  },
  text: {
    fontSize: 17,
  },
});
