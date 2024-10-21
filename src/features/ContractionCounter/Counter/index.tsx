import { View } from 'react-native';
import React from 'react';
import CustomButton from '../../../../components/CustomButton';

const Counter = () => {
  return (
    <View className="h-full flex justify-center items-center bg-white m-2 shadow-2xl p-4">
      {/* <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        className="w-[100px] h-[100px] rounded-full m-4"
      /> */}
      <CustomButton
        title={'Click me'}
        source="https://fakeimg.pl/350x200/?text=Click Me"
        isImage
        handlePress={() => {
          console.log('ASDASDAd');
        }}
        containerStyles={'text-yellow-300'}
      />
      {/* <View className="flex justify-center items-center">
        <Text className="text-xl font-extrabold m-3">Click here</Text>
      </View> */}
    </View>
  );
};

export default Counter;
