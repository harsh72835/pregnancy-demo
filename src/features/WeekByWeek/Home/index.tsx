// import { View, Text, Image } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NestedHome from './NestedHome';
import DueDate from './DueDate';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const Index = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="Home"
        component={NestedHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DueDate" component={DueDate} />
      {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};

export default Index;
