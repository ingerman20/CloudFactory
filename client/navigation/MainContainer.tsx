import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionics from 'react-native-vector-icons/Ionicons';

import { About } from './screens/About';
import { Quotes } from './screens/Quotes';

const aboutName = 'О приложении';
const quotesName = 'Котировки';

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={aboutName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';
            let routeName = route.name;

            if (routeName === aboutName) {
              iconName = focused ? 'cube' : 'cube-outline';
            } else if (routeName === quotesName) {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }

            return <Ionics name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name={'О приложении'} component={About}></Tab.Screen>
        <Tab.Screen name={'Котировки'} component={Quotes}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
