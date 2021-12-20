import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Image,
  ActivityIndicator,
} from "react-native";
import { bool } from "prop-types";
import { Colors } from "constants";

function Loader(props) {
  const {
    isLoading,
  } = props
    return (
      <Modal
        transparent={true}
        animationType={"none"}
        visible={isLoading}
        style={{ zIndex: 1100 }}
        onRequestClose={() => {}}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Image
              source={require(`media/images/logo.png`)}
              style={{ height: 60, width: 60 }}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <ActivityIndicator
              animating={isLoading}
              color={Colors.primary}
            />
          </View>
        </View>
      </Modal>
    );
  
}

Loader.defaultProps = {
 isLoading:bool
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Loader;
