import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const PregnancyItems = () => {
  return (
    <ScrollView>
      <Text className="mx-3 mt-3 text-lg font-bold">Recommended for you</Text>
      <View className="flex flex-row bg-white shadow-2xl rounded-lg p-4 mx-3">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-[100px] h-[100px] rounded-lg"
        />
        <View className="flex ml-4">
          <Text className="text-lg font-bold">Get Free welcome box</Text>
          <Text className="text-lg font-bold">from Amazon</Text>
          <TouchableOpacity
            onPress={() => { }}
            activeOpacity={0.7}
            className={'bg-secondary rounded-xl'}>
            <Text className={'text-base font-bold text-green-400'}>
              Explore
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="mx-3 mt-3 text-lg font-bold">First trimester</Text>
        <Text className="mx-3 mt-3 text-base">Next</Text>
      </View>
      <ScrollView
        horizontal
        className="m-3"
        showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between gap-2">
          {[...Array(6)].map((_, index) => (
            <View
              key={`first-tm-${index}`}
              className="bg-white h-[150px] w-[150px] rounded-md">
              <Image
                source={{ uri: 'https://fakeimg.pl/f9e0e0/' }}
                className="w-[120px] h-[120px] rounded-lg"
              />
              <Text className="text-center text-base font-bold">
                Lorem, ipsum
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="flex flex-row items-center justify-between">
        <Text className="mx-3 text-lg font-bold">Second trimester</Text>
        <Text className="mx-3 mt-3 text-base">Next</Text>
      </View>
      <ScrollView
        horizontal
        className="m-3"
        showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between gap-2">
          {[...Array(8)].map((_, index) => (
            <View
              key={`first-tm-${index}`}
              className="bg-white h-[150px] w-[150px] rounded-md">
              <Image
                source={{ uri: 'https://fakeimg.pl/f9e0e0/' }}
                className="w-[120px] h-[120px] rounded-lg"
              />
              <Text className="text-center text-base font-bold">
                Lorem, ipsum
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="flex flex-row items-center justify-between">
        <Text className="mx-3 placeholder:text-lg font-bold">
          Third trimester
        </Text>
        <Text className="mx-3 mt-3 text-base">Next</Text>
      </View>
      <ScrollView
        horizontal
        className="m-3"
        showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between gap-2">
          {[...Array(10)].map((_, index) => (
            <View
              key={`first-tm-${index}`}
              className="bg-white h-[150px] w-[150px] rounded-md">
              <Image
                source={{ uri: 'https://fakeimg.pl/f9e0e0/' }}
                className="w-[120px] h-[120px] rounded-lg"
              />
              <Text className="text-center text-base font-bold">
                Lorem, ipsum
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default PregnancyItems;
