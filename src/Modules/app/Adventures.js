import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TopBar, Text} from 'components';
const Adventures = () => {
  return (
    <View style={style.container}>
      <TopBar backgroundColor="#000D16" barStyle="light-content" />
      <Text>Adventures</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000D16',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Adventures;
