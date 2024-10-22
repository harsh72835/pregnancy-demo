import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';

const WeightTracker = () => {
  return (
    <ScrollView>
      <View className="flex items-center bg-white m-2 shadow-2xl p-4">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-[100px] h-[100px] rounded-full m-4"
        />
        <View className="flex justify-center items-center">
          <View className="items-center mb-4">
            <Text className="text-normal text-base">No data.</Text>
            <Text className="text-normal text-base">
              Set up your Due Date on Settings Page.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WeightTracker;
