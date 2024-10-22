/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WeekByWeek from './src/features/WeekByWeek';
import MealPlan from './src/features/MealPlan';
import ContractionCounter from './src/features/ContractionCounter';
import KicksCounter from './src/features/KicksCounter';
import KegelExercises from './src/features/KegelExercises';
import BumpGallery from './src/features/BumpGallery';
import WeightTracker from './src/features/WeightTracker';
import PregnancyItems from './src/features/PregnancyItems';
import Calender from './src/features/CalenderAndDiary';
import Settings from './src/features/Settings';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex items-center py-[18px] border-b border-gray-200 mb-1 bg-green-500">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-[100px] h-[100px] rounded-full"
        />
        <Text className="mt-[10px] text-xl font-bold text text-white">
          Pregnancy Week by Week
        </Text>
      </View>
      <DrawerItemList {...props} />
      <View className="h-[1px] my-[5px] bg-gray-200" />
      <DrawerItem
        label="Settings"
        activeTintColor="#22c55e"
        activeBackgroundColor="#22c55e"
        onPress={function () {
          props.navigation.navigate('Settings');
        }}
      />
    </DrawerContentScrollView>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Calendar"
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#22c55e',
        },
      }}>
      <Drawer.Screen
        name="Week by week"
        component={WeekByWeek}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Meal Plan"
        component={MealPlan}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={Calender}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Preganancy Items"
        component={PregnancyItems}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Weight Tracker"
        component={WeightTracker}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Bump Gallery"
        component={BumpGallery}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Kegel Exercises"
        component={KegelExercises}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Kicks Counter"
        component={KicksCounter}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
      <Drawer.Screen
        name="Contraction Counter"
        component={ContractionCounter}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#22c55e',
        }}
      />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView
        className={`h-full ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <ScrollView
          className="flex-1"
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            height: '100%',
          }}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={'#22c55e'}
          />
          <Stack.Navigator
            screenOptions={{
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#22c55e',
              },
            }}>
            {/* Your other screens */}
            <Stack.Screen
              name="MainApp"
              component={MyDrawer}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Settings" component={Settings} options={{}} />
          </Stack.Navigator>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
