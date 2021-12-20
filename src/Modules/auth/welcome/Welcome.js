import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Image} from 'react-native';
import {object} from 'prop-types';
import {Welcome} from './welcome-view';
import style from './styles';
import LinearGradient from 'react-native-linear-gradient';

class WelcomeView extends Component {
  renderView = () => {
    return <Welcome />;
  };
  render() {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: '#000D16'}}>
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

Welcome.propTypes = {
  navigation: object,
};
const styles = StyleSheet.create({
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
export default WelcomeView;
