import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';
import ScoreTable from '../components/ScoreTable';
import MatchCard from '../components/MatchCard';

type GroupPageProps = NativeStackScreenProps<StackParamList, "GroupPage">

const GroupPage = ({navigation, route}: GroupPageProps) => {
    const teamsArray = Object.values(route.params.group.teams);
    const matchesArray = Object.values(route.params.group.matches);


  return (
    <View style={styles.container}>
        <ScoreTable teams={ teamsArray } />
        <View style={styles.matches}>
          <Text style={styles.title}>MATCHES</Text>
          <MatchCard groupTeams={teamsArray} match={matchesArray[0]}/>
          <MatchCard groupTeams={teamsArray} match={matchesArray[1]}/>
          <MatchCard groupTeams={teamsArray} match={matchesArray[2]}/>
          <MatchCard groupTeams={teamsArray} match={matchesArray[3]}/>
          <MatchCard groupTeams={teamsArray} match={matchesArray[4]}/>
          <MatchCard groupTeams={teamsArray} match={matchesArray[5]}/>
        </View>
    </View>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  matches: {
    alignItems: "center",
  },
});
