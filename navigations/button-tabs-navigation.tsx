import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {MyStack} from './stack-navigation';
import ProfilePage from '../page/ProfilePage';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
