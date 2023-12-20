import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Agenda } from "react-native-calendars";
import { Icon } from "react-native-elements";

const items = {
  "2023-12-20": [{ id: 9, time: "12:12" }],
  "2023-12-21": [
    { id: 1, time: "10:10" },
    { id: 2, time: "12:12" },
    { id: 3, time: "15:15" },
  ],
  "2023-12-22": [
    { id: 4, time: "12:12" },
    { id: 5, time: "16:16" },
  ],
  "2023-12-23": [{ id: 6, time: "12:12" }],
  "2021-09-28": [{ id: 7, time: "12:12" }],
  "2021-09-29": [{ id: 8, time: "12:12" }],
};

const Calendar = () => {
  const [selected, setSelected] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  return (
    <SafeAreaView style={tw`flex-1 `}>
      <Agenda
        minDate={today}
        items={items}
        renderItem={(item) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center p-5 px-6 bg-white mt-auto border-t border-gray-200 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
          >
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name="calendar"
              type="ionicon"
              color="#e84393"
              size={18}
            />
            <View style={tw`p-2`}>
              <Text style={tw`text-xl font-semibold`}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
