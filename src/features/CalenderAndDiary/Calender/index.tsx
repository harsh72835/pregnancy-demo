import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Calendar } from 'react-native-calendars';

const Calender = () => {
  return (
    <ScrollView>
      <View className="flex bg-white m-2 shadow-2xl p-4 rounded-lg">
        <Calendar />
      </View>
      <View className="flex bg-white m-2 shadow-2xl rounded-lg">
        <View className="flex bg-white mx-2 shadow-2xl p-4">
          <Text>Date 23 october</Text>
          <Text>Add note here</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Calender;
