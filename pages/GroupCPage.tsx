import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';
import ScoreTable from '../components/ScoreTable';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

type GroupCPageProps = NativeStackScreenProps<StackParamList, "GroupCPage">

const GroupCPage = ({navigation, route}: GroupCPageProps) => {
    const groupCTeams = useSelector((state: RootState) => state.groups.groupC.teams);
    const teamsArray = Object.values(groupCTeams);
  return (
    <View style={styles.container}>
        <ScoreTable teams={ teamsArray } />
    </View>
  );
};

export default GroupCPage;

const styles = StyleSheet.create({
  container: {}
});
