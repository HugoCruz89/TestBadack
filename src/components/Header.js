import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { windowHeight } from "./../utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text } from "components";
import { func, bool, string } from "prop-types";
import Colors from "./../constants/Colors";


const Header = (props) => {
  const { onPress, showArrow, title } = props;
  return (
    <SafeAreaView style={style.header}>
      {showArrow ? (
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={{ backgroundColor: "#EAE0C8", width: 33, height: 33,borderRadius:50 }}>
            <Icon
              color="#000000"
              size={30}
              backgroundColor="#ffffff"
              name={"chevron-left"}
            />
          </View>
        </TouchableWithoutFeedback>
      ) : null}
      {title ? (
        <View style={style.Titulo}>
          <Text type="title" style={{ fontWeight: "bold" }}>
            {title}
          </Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

Header.propTypes = {
  onPress: func,
  showArrow: bool,
  title: string,
};

Header.defaultProps = {
  showArrow: false,
};

const style = StyleSheet.create({
  absolute: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    minHeight: windowHeight * 0.08,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    // backgroundColor: Colors.tabBarColor,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: windowHeight * 0.07,
    paddingHorizontal: 14,
  },
  Titulo: {
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
    flex: 1,
  },
});
export default Header;
