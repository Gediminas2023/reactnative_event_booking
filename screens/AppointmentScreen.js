import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "../components/Calendar";
// import CalendarFavorites from "../components/CalendarFavorites";
import ConfirmUserInformation from "../components/ConfirmUserInformation";

const AppointmentScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-full`}>
        <Calendar />
      </View>
      <View style={tw``}>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="CalendarFavorites"
            component={CalendarFavorites}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="ConfirmCard"
            component={ConfirmUserInformation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default AppointmentScreen;
