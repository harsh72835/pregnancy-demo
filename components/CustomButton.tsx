import { Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import React from 'react';
import 'nativewind';

const CustomButton: React.FC<{
  title: string;
  handlePress: () => void;
  containerStyles: string;
  isImage?: boolean;
  source?: string;
  textStyles?: String;
  isLoading?: boolean;
}> = ({
  title,
  containerStyles,
  handlePress,
  isLoading,
  textStyles,
  isImage,
  source,
}) => {
    return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''
          }`}>
        {isImage ? (
          <Image
            source={{ uri: source }}
            className={`w-[100px] h-[100px] rounded-full m-4 ${containerStyles}`}
          />
        ) : (
          <Text
            className={`text-primary text-normal font-semibold ${textStyles}`}>
            {title}
          </Text>
        )}
        <StatusBar backgroundColor="#161622" />
      </TouchableOpacity>
    );
  };

export default CustomButton;
