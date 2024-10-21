import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Baby = () => {
  return (
    <ScrollView>
      <View className="flex bg-white m-2 shadow-2xl rounded-lg">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-full h-[200px] rounded-lg"
        />
        <View className="flex justify-start items-start rounded-lg">
          <Text className="text-xl font-extrabold m-3">Baby at week 0?</Text>
          <View className="mb-4">
            <Text className="text-normal text-base ml-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              labore architecto officia. Eum doloremque placeat iste
              accusantium, animi vero quidem. Corporis maxime cumque ut
              architecto repellendus perferendis eum dolore ullam. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Nisi, ad, ea eaque
              quibusdam deleniti harum omnis commodi accusamus facere ipsum
              consequatur repudiandae exercitationem sapiente officiis at
              veniam. Atque, placeat eaque!
            </Text>
          </View>
        </View>
      </View>
      <View className="flex bg-white m-2 shadow-2xl rounded-lg">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          className="w-full h-[200px] rounded-lg"
        />
        <View className="flex justify-start items-start rounded-lg">
          <Text className="text-xl font-extrabold m-3">Are you pregnant?</Text>
          <View className="mb-4">
            <Text className="text-normal text-base ml-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              labore architecto officia. Eum doloremque placeat iste
              accusantium, animi vero quidem. Corporis maxime cumque ut
              architecto repellendus perferendis eum dolore ullam. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Nisi, ad, ea eaque
              quibusdam deleniti harum omnis commodi accusamus facere ipsum
              consequatur repudiandae exercitationem sapiente officiis at
              veniam. Atque, placeat eaque!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Baby;
