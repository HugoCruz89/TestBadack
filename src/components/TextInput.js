import React, {Component} from 'react';
import {string, func, bool, oneOf, object} from 'prop-types';
import {TextInput as RNTextInput, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {Easing} from 'react-native-reanimated';

const {timing, Value} = Animated;

const INIT_Y = -13;

const END_Y = -38;

const configUp = {
  duration: 180,
  toValue: END_Y,
  easing: Easing.inOut(Easing.ease),
};

const configDown = {
  duration: 180,
  toValue: INIT_Y,
  easing: Easing.inOut(Easing.ease),
};

class TextInput extends Component {
  state = {
    pristine: true,
    value: this.props.defaultValue,
    focus: false,
    isSecured: this.props.secureTextEntry,
    focusPersist: false,
  };
  isControlled = this.props.hasOwnProperty('value');

  getValue = () => (this.isControlled ? this.props.value : this.state.value);

  transY = new Value(this.getValue() ? END_Y : INIT_Y);

  handleFocus = e => {
    this.setState({focus: true, focusPersist: true}, () => {
      const val = this.getValue();
      if (!val) {
        this.transY._value !== INIT_Y && this.transY.setValue(INIT_Y);
        timing(this.transY, configUp).start();
      }
    });
  };

  handleBlur = e => {
    this.setState({focus: false, pristine: false}, () => {
      const val = this.getValue();
      if (!val) {
        this.setState({focusPersist: false});
        this.transY._value !== END_Y && this.transY.setValue(END_Y);
        timing(this.transY, configDown).start();
      }
    });
  };

  handleChangeText = val => {
    if (this.transY._value !== END_Y) this.transY.setValue(END_Y);
    if (this.props.onChangeText) this.props.onChangeText(val, this.props.name);
    if (!this.isControlled) this.setState({value: val});
  };

  toggleSecureVisibility = () =>
    this.setState({isSecured: !this.state.isSecured});

  render() {
    const {
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      nameIcono,
      colorIcon,
    } = this.props;
    const {
      label,
      placeholder,
      error,
      secureTextEntry,
      keyboardType,
      autoCapitalize,
      autoCorrect,
      clearTextOnFocus,
      onSubmitEditing,
      returnKeyType,
    } = this.props;
    const {focus, focusPersist, isSecured} = this.state;
    return (
      <>
        <View style={[textInputStyle['base-container'], containerStyle]}>
          {label ? (
            <Animated.Text
              style={[
                {
                  transform: [{translateY: this.transY}],
                },
                textInputStyle['base-label'],
                labelStyle,
                focusPersist && textInputStyle['base-label--focus'],
                error && textInputStyle['base-label--error'],
              ]}>
              {label}
            </Animated.Text>
          ) : null}
          <View
            style={[
              textInputStyle['base-input-container'],
              error && textInputStyle['base-input-container--error'],
            ]}>
            <RNTextInput
              style={[textInputStyle['base-input'], inputStyle]}
              value={this.getValue()}
              placeholder={placeholder}
              secureTextEntry={isSecured}
              autoCorrect={autoCorrect}
              clearTextOnFocus={clearTextOnFocus}
              autoCapitalize={autoCapitalize}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              placeholderTextColor={focus ? '#555E65' : 'transparent'}
              onChangeText={this.handleChangeText}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {secureTextEntry == true ? (
              <View style={textInputStyle['security-toggler']}>
                <Icon
                  color="#ffffff"
                  size={24}
                  backgroundColor="transparent"
                  name={isSecured ? 'eye-off-outline' : 'eye-outline'}
                  onPress={this.toggleSecureVisibility}
                />
              </View>
            ) : (
              <View style={textInputStyle['security-toggler']}>
                {nameIcono !== '' ? (
                  <Icon
                    color={colorIcon}
                    size={24}
                    backgroundColor="transparent"
                    name={nameIcono}
                  />
                ) : null}
              </View>
            )}
          </View>
          {error ? (
            <Text style={[textInputStyle['base-error'], errorStyle]}>
              {error}
            </Text>
          ) : null}
        </View>
      </>
    );
  }
}

TextInput.propTypes = {
  colorIcon: string,
  nameIcono: string,
  placeholder: string,
  label: string,
  error: string,
  onChangeText: func,
  containerStyle: object,
  labelStyle: object,
  inputStyle: object,
  errorStyle: object,
  secureTextEntry: bool,
  autoCorrect: bool,
  clearTextOnFocus: bool,
  onSubmitEditing: func,
  autoCapitalize: oneOf(['none', 'sentences', 'words', 'characters']),
  keyboardType: oneOf([
    'default',
    'number-pad',
    'decimal-pad',
    'numeric',
    'email-address',
    'phone-pad',
  ]),
  returnKeyType: oneOf([
    'done',
    'go',
    'next',
    'search',
    'send',
    'none',
    'previous',
    'default',
    'emergency-call',
    'google',
    'join',
    'route',
    'yahoo',
  ]),
};

TextInput.defaultProps = {
  keyboardType: 'default',
  nameIcono: '',
  colorIcon: '#ffffff',
};

export const textInputStyle = StyleSheet.create({
  'base-container': {
    position: 'relative',
    justifyContent: 'flex-end',
    width: '100%',
    paddingBottom: 20,
    paddingTop: 28,
  },
  'base-label': {
    position: 'absolute',
    bottom: 10,
    color: '#ffffff',
    fontSize: 16,
  },
  'base-label--focus': {
    fontSize: 12,
    color: '#8C8C8C',
  },
  'base-label--error': {
    color: '#E30000',
  },
  'base-input-container': {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  'base-input-container--error': {
    borderColor: '#E30000',
  },
  'base-input': {
    flex: 1,
    minWidth: 140,
    fontSize: 16,
    paddingBottom: 3,
    color: '#ffffff',

    fontWeight: 'normal',
  },
  'base-secure-button': {
    position: 'absolute',
    right: 0,
  },
  'base-error': {
    position: 'absolute',
    bottom: 0,
    marginTop: 2,
    width: '100%',
    color: '#E30000',
    textAlign: 'left',
  },
  'security-toggler': {
    marginBottom: 3,
    width: 26,
    height: 26,
  },
});

export default TextInput;
