import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllGroupsPage from './pages/AllGroupsPage';
import MainStackNavigation from './components/MainStackNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <MainStackNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1}
});