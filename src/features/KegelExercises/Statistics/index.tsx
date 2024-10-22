import { View, Text, ScrollView } from 'react-native';
import React from 'react';

const Statistics = () => {
  return (
    <ScrollView>
      <View className="flex bg-white m-2 shadow-2xl p-4 rounded-lg">
        <View className="flex flex-row gap-6 justify-evenly">
          <View>
            <Text className="text-center text-base">Lifetime duration</Text>
            <Text className="text-center text-3xl font-bold text-blue-500">
              0s
            </Text>
          </View>
          <View className="border h-20 border-gray-300" />
          <View>
            <Text className="text-center text-base">Training days</Text>
            <Text className="text-center text-3xl font-bold text-blue-500">
              0
            </Text>
          </View>
        </View>
      </View>
      <View className="flex bg-white mx-2 shadow-2xl p-4 h-64 rounded-lg">
        <Text className="text-center text-base font-bold">
          TRAINING BY DAYS
        </Text>
        <View className="flex justify-center items-center m-auto">
          <Text>No data for the last 14 days.</Text>
        </View>
      </View>
      <View className="flex bg-white mx-2 mt-2 shadow-2xl p-4 h-72 rounded-lg">
        <Text className="text-center text-base font-bold">
          LEVELS
        </Text>
        <View className="flex justify-center items-center m-auto">
          <Text>No data for the last 14 days.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Statistics;
