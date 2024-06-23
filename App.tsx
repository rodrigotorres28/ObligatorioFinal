import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigation from './components/MainStackNavigation';
import { Provider } from 'react-redux';
import { store } from './state/store';

export default function App() {
  return (
    <Provider store={store}>

      <View style={styles.container}>
        <MainStackNavigation/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1}
});