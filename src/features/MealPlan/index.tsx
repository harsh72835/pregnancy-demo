import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MealPlan = () => {
  return (
    <ScrollView>
      <View className="flex bg-white shadow-2xl p-4 rounded-lg">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-4 justify-between">
            <Text className="text-center text-base font-bold border p-2 rounded-3xl">
              Today
            </Text>
            <Text className="text-center text-base font-bold border p-2 rounded-3xl">
              Tomorrow
            </Text>
            <Text className="text-center text-base font-bold border p-2 rounded-3xl">
              Oct 26
            </Text>
            <Text className="text-center text-base font-bold border p-2 rounded-3xl">
              Oct 27
            </Text>
            <Text className="text-center text-base font-bold border p-2 rounded-3xl">
              Oct 27
            </Text>
            <Text className="text-center text-base font-bold border p-2 rounded-3xl">
              Oct 27
            </Text>
          </View>
        </ScrollView>
      </View>
      <View className="flex flex-row bg-white shadow-2xl rounded-lg p-4 m-2">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-[100px] h-[100px] rounded-lg"
        />
        <View className="flex ml-4">
          <Text className="text-xl font-bold">Snack</Text>
          <Text className="text-base font-bold">Strawberry banana smoothie</Text>
          <Text className='text-xs mt-2'>Prep time: 1min</Text>
          <Text className='text-xs'>Cook time: 4min</Text>
        </View>
      </View>
      <View className="flex flex-row bg-white shadow-2xl rounded-lg p-4 m-2">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-[100px] h-[100px] rounded-lg"
        />
        <View className="flex ml-4">
          <Text className="text-xl font-bold">Snack</Text>
          <Text className="text-base font-bold">Strawberry banana smoothie</Text>
          <Text className='text-xs mt-2'>Prep time: 1min</Text>
          <Text className='text-xs'>Cook time: 4min</Text>
        </View>
      </View>
      <View className="flex flex-row bg-white shadow-2xl rounded-lg p-4 m-2">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-[100px] h-[100px] rounded-lg"
        />
        <View className="flex ml-4">
          <Text className="text-xl font-bold">Snack</Text>
          <Text className="text-base font-bold">Strawberry banana smoothie</Text>
          <Text className='text-xs mt-2'>Prep time: 1min</Text>
          <Text className='text-xs'>Cook time: 4min</Text>
        </View>
      </View>
      <View className="flex flex-row bg-white shadow-2xl rounded-lg p-4 m-2">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-[100px] h-[100px] rounded-lg"
        />
        <View className="flex ml-4">
          <Text className="text-xl font-bold">Snack</Text>
          <Text className="text-base font-bold">Strawberry banana smoothie</Text>
          <Text className='text-xs mt-2'>Prep time: 1min</Text>
          <Text className='text-xs'>Cook time: 4min</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealPlan;
