import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Brigita",
    image: require("../assets/profile.png"),
    screen: "AppointmentScreen",
  },
  {
    id: "456",
    title: "Gabrielė",
    image: require("../assets/profile2.jpg"),
    screen: "AppointmentScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item: { title, image, screen } }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={image}
            />
            <Text style={tw`mt-2 text-lg font-semibold `}>{title}</Text>
            <Icon
              style={tw`p-2 bg-pink-500 rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
