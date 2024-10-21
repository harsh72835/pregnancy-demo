import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Counter from './Counter';
import Records from './Records';

const Tab = createMaterialTopTabNavigator();

const ContractionCounter = () => {
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

export default ContractionCounter;
