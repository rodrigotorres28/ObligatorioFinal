import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';
import ScoreTable from '../components/ScoreTable';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

type GroupDPageProps = NativeStackScreenProps<StackParamList, "GroupDPage">

const GroupDPage = ({navigation, route}: GroupDPageProps) => {
    const groupDTeams = useSelector((state: RootState) => state.groups.groupD.teams);
    const teamsArray = Object.values(groupDTeams);
  return (
    <View style={styles.container}>
        <ScoreTable teams={ teamsArray } />
    </View>
  );
};

export default GroupDPage;

const styles = StyleSheet.create({
  container: {}
});
