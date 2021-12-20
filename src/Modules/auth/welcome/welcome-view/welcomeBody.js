import React, {useState, useRef, useEffect} from 'react';

import {StyleSheet} from 'react-native';
import {Button, Text, TopBar} from 'components';
import {useNavigation} from '@react-navigation/native';
import {Slogan} from '../../static-components';
import {View} from 'react-native';
import styles from '../styles';
const WelcomeBody = props => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const [checking, setChecking] = useState(false);

  return (
    <View style={styles.container}>
      <TopBar backgroundColor="#000D16" barStyle="light-content" />
      <View style={{flex: 5}}></View>
      <View style={style.containerSlogan}>
        <Text type="title" style={{fontSize: 23}}>
          Welcome
        </Text>
        <Slogan />
      </View>
      <View style={style.containerButton}>
        <Button
          style={{container: styles.buttons}}
          title="Get Started"
          loading={checking}
          onPress={() => navigation.navigate('Login', {})}
        />
      </View>
    </View>
  );
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

    marginHorizontal: 21,
  },
  containerButton: {
    flex: 1,
    marginHorizontal: 41,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
export default WelcomeBody;
