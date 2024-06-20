import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Group from '../components/Group';

interface AllGroupsPageProps {}

const AllGroupsPage = (props: AllGroupsPageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupsRow}>
      <Group/>
      <Group/>
      </View>
      <View style={styles.groupsRow}>
      <Group/>
      <Group/>
      </View>
    </View>
  );
};

export default AllGroupsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly'
      },
    groupsRow: {
      flexDirection: "row",
      justifyContent: "space-around"
    }
});
