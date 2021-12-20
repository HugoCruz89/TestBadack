import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Image} from 'react-native';
import {object} from 'prop-types';
import {Login} from './body-views';
import style from './styles';

class LoginScreen extends Component {
  renderView = () => {
    return <Login />;
  };
  render() {
    return (
      <View style={styles.principalcontainer}>
        <ImageBackground
          source={require('./../../../media/images/Photo.png')}
          style={styles.imgBackground}>
          <Image
            style={styles.logo}
            source={require('./../../../media/images/Overlay.png')}
          />
          <View style={style.container}>{this.renderView()}</View>
        </ImageBackground>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: object,
};
const styles = StyleSheet.create({
  principalcontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000D16',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    height: '80%',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    height: '80%',
    position: 'absolute',
  },
});
export default LoginScreen;
