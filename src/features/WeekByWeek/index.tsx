import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Mom from './Mom';
import Baby from './Baby';
import 'nativewind';

const Tab = createMaterialTopTabNavigator();

const WeekByWeek = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#4CAF50',
          marginHorizontal: 10,
          marginTop: 10,
          borderRadius: 30,
        },
        tabBarItemStyle: {
          width: 124,
          height: 50,
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 20,
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: '100%',
          borderRadius: 26,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mom" component={Mom} />
      <Tab.Screen name="Baby" component={Baby} />
    </Tab.Navigator>
  );
};

export default WeekByWeek;
