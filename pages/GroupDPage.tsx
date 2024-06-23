import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackParamList } from '../types/MainStackTypes';

type GroupDPageProps = NativeStackScreenProps<StackParamList, "GroupDPage">

const GroupDPage = ({navigation, route}: GroupDPageProps) => {
  return (
    <View style={styles.container}>
      <Text>GroupDPage</Text>
    </View>
  );
};

export default GroupDPage;

const styles = StyleSheet.create({
  container: {}
});
