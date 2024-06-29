import * as React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GroupPreview from '../components/GroupPreview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types/MainStackTypes';

const groupsOfTeams = [
  {
    id: "1",
    groupName: 'GROUP A',
    teams: [
      {id: '1', name: 'Argentina', flag: require('../assets/flags/ar.png')},
      {id: '2', name: 'Peru', flag: require('../assets/flags/pe.png')},
      {id: '3', name: 'Chile', flag: require('../assets/flags/cl.png')},
      {id: '4', name: 'Canada', flag: require('../assets/flags/ca.png')}
    ]
  },
  {
    id: "2",
    groupName: 'GROUP B',
    teams: [
      {id: '5', name: 'Mexico', flag: require('../assets/flags/mx.png')},
      {id: '6', name: 'Ecuador', flag: require('../assets/flags/ec.png')},
      {id: '7', name: 'Venezuela', flag: require('../assets/flags/ve.png')},
      {id: '8', name: 'Jamaica', flag: require('../assets/flags/jm.png')}
    ]
  },
  {
    id: "3",
    groupName: 'GROUP C',
    teams: [
      {id: '9', name: 'USA', flag: require('../assets/flags/us.png')},
      {id: '10', name: 'Uruguay', flag: require('../assets/flags/uy.png')},
      {id: '11', name: 'Panama', flag: require('../assets/flags/pa.png')},
      {id: '12', name: 'Bolivia', flag: require('../assets/flags/bo.png')}
    ]
  },
  {
    id: "4",
    groupName: 'GROUP D',
    teams: [
      {id: '13', name: 'Brazil', flag: require('../assets/flags/br.png')},
      {id: '14', name: 'Colombia', flag: require('../assets/flags/co.png')},
      {id: '15', name: 'Paraguay', flag: require('../assets/flags/py.png')},
      {id: '16', name: 'Costa Rica', flag: require('../assets/flags/cr.png')}
    ]
  }
];

type AllGroupsPageProps = NativeStackScreenProps<StackParamList, "AllGroupsPage">

const AllGroupsPage = ({navigation} : AllGroupsPageProps) => {

  const navigateToGroupPage = (groupId: string) => {
    switch (groupId) {
      case "1":
        navigation.navigate('GroupPage', { groupName: 'groupA' });
        break;
      case "2":
        navigation.navigate('GroupPage', { groupName: 'groupB' });
        break;
      case "3":
        navigation.navigate('GroupPage', { groupName: 'groupC' });
        break;
      case "4":
        navigation.navigate('GroupPage', { groupName: 'groupD' });
        break;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={groupsOfTeams}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToGroupPage(item.id)}>
            <GroupPreview name={item.groupName} teams={item.teams} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.groupsRow}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

export default AllGroupsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupsRow: {
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  flatListContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
