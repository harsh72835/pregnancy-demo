import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calender from './Calender';
import Notes from './Notes';

const Tab = createMaterialTopTabNavigator();

const CalenderAndDiary = () => {
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
      <Tab.Screen name="Calender" component={Calender} />
      <Tab.Screen name="Notes" component={Notes} />
    </Tab.Navigator>
  );
};

export default CalenderAndDiary;
