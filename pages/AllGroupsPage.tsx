import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AllGroupsPageProps {}

const AllGroupsPage = (props: AllGroupsPageProps) => {
  return (
    <View style={styles.container}>
      <Text>AllGroupsPage</Text>
    </View>
  );
};

export default AllGroupsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
