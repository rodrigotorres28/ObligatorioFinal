import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface TeamGroupItemProps {
    name: string;
    flag: ImageSourcePropType;
}

const TeamGroupItem = ({name, flag}: TeamGroupItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={flag}
        style={styles.flagImage}
        resizeMode='contain'
      />
      <Text style={styles.teamName}>{name}</Text>
    </View>
  );
};

export default TeamGroupItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(12,0,145,0.4)",
    height: 40,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 12,
    marginVertical: 3,
  },
  flagImage: {
    flex: 2,
    height: 25,
  },
  teamName: {
    flex: 3,
    color: "white",
    fontWeight: "500",
  },
});
