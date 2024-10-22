import { View, Text, ScrollView } from 'react-native';
import React from 'react';

const BumpGallery = () => {
  const PHOTOS_LENGTH = 36;
  return (
    <ScrollView>
      <View className="flex flex-row flex-wrap">
        {[...Array(PHOTOS_LENGTH)].map((_, index) => (
          <View
            key={`galley-${index}`}
            className="h-36 w-28 flex justify-end items-center border border-gray-300 rounded-lg m-2">
            <Text className="pb-2 font-semibold">{index + 5} Weeks</Text>
          </View>
        ))}
        <View className="h-36 w-28 flex justify-end items-center border border-gray-300 rounded-lg m-2">
          <Text className="pb-2 font-semibold">Baby Born</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BumpGallery;
