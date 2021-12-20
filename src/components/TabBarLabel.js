import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {string, bool} from 'prop-types';

const TabBarLabel = ({color, focused, title}) => {
  const titleVariable = {
    color,
    marginBottom: focused ? 2 : 2,
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleVariable]}>{title}</Text>
    </View>
  );
};

TabBarLabel.proTypes = {
  color: string,
  title: string,
  focused: bool,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 0,
  },
  title: {
    fontSize: 9,
    textTransform: 'uppercase',
  },
  ball: {
    height: 5,
    width: 5,
    borderRadius: 2.5,
    marginBottom: 2,
  },
});

export default TabBarLabel;
