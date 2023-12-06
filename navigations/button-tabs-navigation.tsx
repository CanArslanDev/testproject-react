import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { MyStack } from './stack-navigation';
import ProfilePage from '../ProfilePage';
import testpage from '../page/testpage';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Profi1le"
        component={testpage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;