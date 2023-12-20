import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const CalendarFavorites = () => {
  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      <View style={tw`h-12 p-2`}>
        <Text style={tw`text-center text-black text-xl font-semibold`}>
          {/* {userInformation.selected} */}
          User info
        </Text>
      </View>
      <View style={tw`h-12 p-2 `}>
        <Text style={tw`text-center text-black text-xl font-semibold`}>
          {/* {userInformation.price} */}
          info
        </Text>
      </View>
      <View style={tw`h-12 p-2 `}>
        <Text style={tw`text-center text-black text-xl font-semibold`}>
          {/* {userInformation.distance} - Km */}
          test
        </Text>
      </View>
      <View style={tw`h-12 p-2 `}>
        <Text style={tw`text-center text-black text-xl font-semibold`}>
          {/* {userInformation.address.description} */}
          test
        </Text>
      </View>
    </View>
  );
};

export default CalendarFavorites;

const styles = StyleSheet.create({});
