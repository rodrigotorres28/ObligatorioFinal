import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';
import ScoreTable from '../components/ScoreTable';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

type GroupAPageProps = NativeStackScreenProps<StackParamList, "GroupAPage">

const GroupAPage = ({navigation, route}: GroupAPageProps) => {
    const groupATeams = useSelector((state: RootState) => state.groups.groupA.teams);
    const teamsArray = Object.values(groupATeams);
  return (
    <View style={styles.container}>
        <ScoreTable teams={ teamsArray } />
    </View>
  );
};

export default GroupAPage;

const styles = StyleSheet.create({
  container: {}
});
