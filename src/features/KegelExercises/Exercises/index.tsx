import { View, Text, Image } from 'react-native';
import React from 'react';
import CustomButton from '../../../../components/CustomButton';

const Exercises: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View className="flex bg-white m-2 shadow-2xl rounded-lg">
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        className="w-full h-[200px] rounded-lg"
      />
      <View className="flex justify-start items-start">
        <View className="flex flex-col my-3">
          <Text className="text-lg font-extrabold mx-3">Classic Kegel</Text>
          <Text className="text-base font-normal mx-3 ">
            3s x 3s, 10 repeats
          </Text>
        </View>
        <View className="flex flex-col my-3">
          <Text className="text-lg font-extrabold mx-3">Pulses Kegel</Text>
          <Text className="text-base font-normal mx-3 ">
            3s x 3s, 10 repeats
          </Text>
        </View>
        <CustomButton
          title="START TRAINING"
          containerStyles="bg-green-500 p-4 w-full rounded-full text-normal min-h-[40px]"
          textStyles={'text-white'}
          handlePress={() => {
            navigation.navigate('DueDate');
          }}
        />
        <CustomButton
          title="How to perform exercises?"
          containerStyles="text-green-500 p-4 w-full rounded-full text-normal min-h-[40px]"
          textStyles={'text-green-500'}
          handlePress={() => {
            // navigation.navigate('DueDate');
          }}
        />
      </View>
    </View>
  );
};

export default Exercises;
