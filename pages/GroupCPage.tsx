import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';

type GroupCPageProps = NativeStackScreenProps<StackParamList, "GroupCPage">

const GroupCPage = ({navigation, route}: GroupCPageProps) => {
  return (
    <View style={styles.container}>
      <Text>GroupCPage</Text>
    </View>
  );
};

export default GroupCPage;

const styles = StyleSheet.create({
  container: {}
});
