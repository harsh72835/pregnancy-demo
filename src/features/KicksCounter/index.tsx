import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Records from './Records';
import Counter from './Counter';

const Tab = createMaterialTopTabNavigator();

const KicksCounter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#22c55e',
        },
        tabBarItemStyle: {
          height: 50,
          justifyContent: 'center',
          alignSelf: 'center',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: 'orange',
        },
      }}>
      <Tab.Screen name="Counter" component={Counter} />
      <Tab.Screen name="Records" component={Records} />
    </Tab.Navigator>
  );
};

export default KicksCounter;
