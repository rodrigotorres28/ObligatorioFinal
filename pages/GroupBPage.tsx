import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';

type GroupBPageProps = NativeStackScreenProps<StackParamList, "GroupBPage">

const GroupBPage = ({navigation, route}: GroupBPageProps) => {
  return (
    <View style={styles.container}>
      <Text>GroupBPage</Text>
    </View>
  );
};

export default GroupBPage;

const styles = StyleSheet.create({
  container: {}
});
