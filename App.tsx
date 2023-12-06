import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {MyStack} from './navigations/stack-navigation';
import MyTabs from './navigations/button-tabs-navigation';
const App = () => {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
};
export default App;
