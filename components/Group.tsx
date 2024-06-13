import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface GroupProps {}

const Group = (props: GroupProps) => {
  return (
    <View style={styles.container}>
      <Text>Group</Text>
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({
  container: {}
});
