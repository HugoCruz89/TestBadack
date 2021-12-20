import React, {useState} from 'react';

import {StyleSheet, Alert, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {TextInput, Button, Text} from 'components';
import {isEmail, isValidInput} from 'src/utils';
import {loginUser} from 'ducks/auth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Join, join} from './../static-components';
const FormLoginScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setLocalEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [checking, setChecking] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameIcon, setnameIcon] = useState('');
  //

  const handleEmailInput = value => {
    setLocalEmail(value.toLowerCase());
    if (isEmail(email)) {
      setEmailError('');
      setnameIcon('');
    } else {
      setnameIcon('warning');
      setEmailError('The email entered is not registered');
    }
  };

  const requestLogin = async () => {
    try {
      setChecking(true);
      if (email == 'ing.hugo.isc@gmail.com' && password == 123456) {
        await dispatch(loginUser(email, password));
      } else {
        Alert.alert(
          'Incorrect password',
          `The password you entered for ${email} is incorrect. Please Try again.`,
        );
      }

      setChecking(false);
    } catch (err) {}
  };

  const handlePasswordInput = value => {
    setPassword(value);
    passwordError && setPasswordError('');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContianier}>
        <Icon
          color="white"
          size={28}
          backgroundColor="transparent"
          name={'chevron-left'}
          onPress={props.navigation.goBack}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text type="title" style={{fontSize: 27}}>
          Log In
        </Text>
      </View>
      <View style={{marginHorizontal: 41, flex: 1, justifyContent: 'center'}}>
        <TextInput
          label="Email"
          name="email"
          key="email"
          keyboardType="email-address"
          autoCapitalize="none"
          clearTextOnFocus
          returnKeyType="next"
          defaultValue={email}
          error={emailError}
          onChangeText={handleEmailInput}
          nameIcono={nameIcon}
          colorIcon="red"
        />
        <TextInput
          label="Password"
          name="password"
          key="password"
          clearTextOnFocus
          returnKeyType="send"
          error={passwordError}
          onChangeText={handlePasswordInput}
          onSubmitEditing={requestLogin}
          secureTextEntry
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 41, justifyContent: 'flex-end'}}>
        <Button
          title="Sig In"
          onPress={() => requestLogin()}
          style={{container: styles['submit-button']}}
        />
        <Join />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContianier: {
    width: '15%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    top: 10,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000D16',
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: '#43485C',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    textTransform: 'uppercase',
    marginTop: 15,
  },
  description: {
    color: '#43485C',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default FormLoginScreen;
