import { View, Text, ScrollView } from 'react-native';
import React from 'react';

const Notes = () => {
  return (
    <ScrollView>
      <View className="flex bg-white m-2 shadow-2xl rounded-lg">
        <View className="flex bg-white mx-2 shadow-2xl p-3">
          <Text>Search here</Text>
        </View>
      </View>
      <View className="flex bg-white m-2 shadow-2xl rounded-lg">
        <View className="flex bg-white mx-2 shadow-2xl p-4">
          <Text>Records</Text>
          <Text>TODO: accordian here</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notes;
