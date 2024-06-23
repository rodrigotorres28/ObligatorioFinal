import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';

type GroupAPageProps = NativeStackScreenProps<StackParamList, "GroupAPage">

const GroupAPage = ({navigation, route}: GroupAPageProps) => {
  return (
    <View style={styles.container}>
      <Text>GroupAPage</Text>
    </View>
  );
};

export default GroupAPage;

const styles = StyleSheet.create({
  container: {}
});
