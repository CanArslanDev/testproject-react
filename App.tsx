// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './pages/store';
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
          {/* Diğer sayfaları buraya ekleyin */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
