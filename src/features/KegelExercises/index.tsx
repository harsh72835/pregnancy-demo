import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Exercises from './Exercises';
import Statistics from './Statistics';

const Tab = createMaterialTopTabNavigator();

const KegelExercises = () => {
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
      <Tab.Screen name="Exercises" component={Exercises} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
};

export default KegelExercises;
