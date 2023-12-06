import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../page/HomePage';
import ChatPage from '../page/ChatPage';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ChatPage" component={ChatPage} />
    </Stack.Navigator>
  );
}
