import * as React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GroupPreview from '../components/GroupPreview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../types/MainStackTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import LargeHorizontalButton from '../components/LargeHorizontalButton';

type AllGroupsPageProps = NativeStackScreenProps<StackParamList, "AllGroupsPage">

const AllGroupsPage = ({navigation} : AllGroupsPageProps) => {

  const groups = useSelector((state: RootState) => state.groups);
  const teams = useSelector((state: RootState) => state.teams);

  const teamsIdsInGroupA = groups["groupA"].teams;
  const teamsIdsInGroupB = groups["groupB"].teams;
  const teamsIdsInGroupC = groups["groupC"].teams;
  const teamsIdsInGroupD = groups["groupD"].teams;

  const groupsOfTeams = [
    {
      id: groups["groupA"].groupId.toString(),
      displayName: groups["groupA"].displayName,
      teams: teamsIdsInGroupA.map(teamId => teams[teamId])
    },
    {
      id: groups["groupB"].groupId.toString(),
      displayName: groups["groupB"].displayName,
      teams: teamsIdsInGroupB.map(teamId => teams[teamId])
    },
    {
      id: groups["groupC"].groupId.toString(),
      displayName: groups["groupC"].displayName,
      teams: teamsIdsInGroupC.map(teamId => teams[teamId])
    },
    {
      id: groups["groupD"].groupId.toString(),
      displayName: groups["groupD"].displayName,
      teams: teamsIdsInGroupD.map(teamId => teams[teamId])
    }
  ];

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
            <GroupPreview name={item.displayName} teams={item.teams} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.groupsRow}
        contentContainerStyle={styles.flatListContentContainer}
      />
      <View style={styles.bracketButton}>
        <LargeHorizontalButton buttonColor="#044fc7" text='Bracket Stage' textColor="white" onPress={() => navigation.navigate("BracketPage")}/>
      </View>
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
  bracketButton: {
    marginBottom: 30,
  }
});
