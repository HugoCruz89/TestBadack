import React from 'react';
import {
  string,
  func,
  bool,
  any,
  oneOf,
  shape,
  object,
  oneOfType,
  array,
} from 'prop-types';
import {TouchableHighlight, StyleSheet, ActivityIndicator} from 'react-native';
import Text from 'components/Text';
import Colors from '../constants/Colors';

function Button(props) {
  const {
    loading,
    title,
    onPress,
    disabled,
    accessibilityLabel,
    theme,
    style,
    children,
  } = props;
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled || loading}
      underlayColor="#DDDDDD"
      accessibilityLabel={accessibilityLabel}
      style={[
        buttonStyle['base-container'],
        buttonStyle[`${theme}-container`],
        style.container,
        disabled && buttonStyle[`${theme}-container--disabled`],
      ]}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : children ? (
        children
      ) : (
        <Text
          style={[
            buttonStyle['base-text'],
            buttonStyle[`${theme}-text`],
            style.text,
            disabled && buttonStyle[`${theme}-text--disabled`],
          ]}>
          {title}
        </Text>
      )}
    </TouchableHighlight>
  );
}

Button.propTypes = {
  title: any,
  onPress: func,
  disabled: bool,
  accessibilityLabel: string,
  loading: bool,
  style: shape({
    container: oneOfType([object, array]),
    text: oneOfType([object, array]),
  }),
  theme: oneOf([
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'outlined',
    'other',
  ]),
};

Button.defaultProps = {
  theme: 'primary',
  style: {},
};

export const buttonStyle = StyleSheet.create({
  'base-container': {
    height: 46,
    minWidth: 100,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  'base-text': {
    width: '100%',
    fontSize: 14,
    textAlign: 'center',
  },
  'primary-container': {
    backgroundColor: Colors.primary,
  },
  'primary-container--disabled': {
    backgroundColor: '#43485C',
    opacity: 0.3,
  },
  'primary-text': {
    color: '#FFFFFF',

    fontWeight: '600',
    fontSize: 18,
  },
  'primary-text--disabled': {
    color: 'white',
  },
  'secondary-container': {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  'secondary-container--disabled': {
    backgroundColor: '#43485C',
    opacity: 0.3,
  },
  'secondary-text': {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  'secondary-text--disabled': {
    color: '#202228',
    fontWeight: 'bold',
    opacity: 0.3,
  },
  'tertiary-container': {
    backgroundColor: '#ffffff',
  },
  'tertiary-container--disabled': {
    opacity: 0.3,
  },
  'tertiary-text': {
    color: '#000000',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  'tertiary-text--disabled': {
    opacity: 0.3,
  },
  'danger-container': {
    backgroundColor: '#FC3838',
  },
  'danger-container--disabled': {
    opacity: 0.3,
  },
  'danger-text': {
    color: '#FFFFFF',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  'danger-text--disabled': {
    color: '#FFFFFF',
    fontWeight: '700',
    opacity: 0.3,
  },
  'outlined-container': {
    borderColor: '#2A2B37',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  'outlined-container--disabled': {
    opacity: 0.3,
  },
  'outlined-text': {
    color: '#2A2B37',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  'outlined-text--disabled': {
    color: '#202228',
    fontWeight: 'bold',
    opacity: 0.3,
  },
  'other-container': {
    backgroundColor: '#E2C792',
  },
  'other-container--disabled': {
    opacity: 0.3,
  },
  'other-text': {
    color: '#43485C',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  'other-text--disabled': {
    color: '#202228',
    fontWeight: '600',
    opacity: 0.3,
  },
});

export default Button;
