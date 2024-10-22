import { View, Text } from 'react-native';
import React from 'react';

const Records = () => {
  return (
    <>
      <View className="flex bg-white m-2 shadow-2xl p-4 rounded-lg">
        <View className="flex flex-row gap-2 justify-between">
          <Text className="text-center text-base font-bold">Date</Text>
          <Text className="text-center text-base font-bold">Contraction</Text>
          <Text className="text-center text-base font-bold">Rest</Text>
        </View>
      </View>
      <View className="flex bg-white mx-2 shadow-2xl p-4">
        <Text>Records</Text>
        <Text>TODO: accordian here</Text>
      </View>
    </>
  );
};

export default Records;
