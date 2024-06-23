import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';
import ScoreTable from '../components/ScoreTable';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

type GroupBPageProps = NativeStackScreenProps<StackParamList, "GroupBPage">

const GroupBPage = ({navigation, route}: GroupBPageProps) => {
    const groupBTeams = useSelector((state: RootState) => state.groups.groupB.teams);
    const teamsArray = Object.values(groupBTeams);
  return (
    <View style={styles.container}>
        <ScoreTable teams={ teamsArray } />
    </View>
  );
};

export default GroupBPage;

const styles = StyleSheet.create({
  container: {}
});
