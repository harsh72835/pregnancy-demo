import { Text, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import 'nativewind';

const CustomButton: React.FC<{
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles?: String;
  isLoading?: boolean;
}> = ({ title, containerStyles, handlePress, isLoading, textStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''
        }`}>
      <Text className={`text-primary text-normal font-semibold ${textStyles}`}>
        {title}
      </Text>
      <StatusBar backgroundColor="#161622" />
    </TouchableOpacity>
  );
};

export default CustomButton;
