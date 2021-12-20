import React, {useState, useRef, useEffect} from 'react';
import {func, string} from 'prop-types';
import {StyleSheet, Image, ImageBackground} from 'react-native';
import {Button, Text} from 'components';
import {useNavigation} from '@react-navigation/native';
import {Slogan} from '../../static-components';
import {View} from 'react-native';
import styles from '../styles';
const LoginView = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 2.8}}></View>
      <View style={style.containerSlogan}>
        <Text type="title" style={{textAlign: 'left', fontSize: 23}}>
          Gain access to a large, highly influential network of entrepreneurs
        </Text>
      </View>
      <View style={style.containerButton}>
        <Button
          style={{container: styles.buttons}}
          title="Apply Now!"
          onPress={() => null}
        />
        <Button
          style={{container: styles.buttons}}
          title="Login"
          onPress={() => navigation.navigate('FormLoginScreen', {})}
          theme="secondary"
        />
      </View>
    </View>
  );
};

LoginView.propTypes = {
  email: string,
  moveToRecoverScreen: func,
  goToRecoverScreen: func,
  goToWelcome: func,
};
const style = StyleSheet.create({
  imgBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  containerImage: {
    position: 'absolute',
    height: '75%',
  },
  containerSlogan: {
    flex: 1,
    alignContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',

    marginHorizontal: 41,
  },
  containerButton: {
    flex: 1,
    marginHorizontal: 41,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
export default LoginView;
