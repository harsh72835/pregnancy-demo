import { View, Text, Image } from 'react-native';
import React from 'react';
import CustomButton from '../../../../components/CustomButton';

const NestedHome: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View className="flex items-center bg-white m-2 shadow-2xl p-4">
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        className="w-[100px] h-[100px] rounded-full m-4"
      />
      <View className="flex justify-center items-center">
        <Text className="text-xl font-extrabold m-3">Are you pregnant?</Text>
        <View className="items-center mb-4">
          <Text className="text-normal text-base">Set up your due Date</Text>
          <Text className="text-normal text-base">
            to start tracking pregnancy
          </Text>
        </View>
        <CustomButton
          title="SET DUE DATE"
          containerStyles="bg-green-500 p-4 rounded-full text-normal min-h-[40px]"
          textStyles={'text-white'}
          handlePress={() => {
            navigation.navigate('DueDate');
          }}
        />
      </View>
    </View>
  );
};

export default NestedHome;
