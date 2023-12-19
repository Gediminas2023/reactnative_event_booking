import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Text>Welcome to the Home Screen!</Text>
        <Button title="Go Back" onPress={handleGoBack} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
