import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

import Colors from "./../constants/Colors";
const TabBar = (props) => {
  return (
  
      <BottomTabBar  {...props} />
     
  );
};

const style = StyleSheet.create({
  Container: {
    height: 55,
    backgroundColor: Colors.tabBarColor,
    borderRadius: 20,
  },
});
export default TabBar;
