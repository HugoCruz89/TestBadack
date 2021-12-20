import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TopBar, Text} from 'components';
import {useDispatch} from 'react-redux';
import {logOut} from 'ducks/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Home = props => {
  const dispatch = useDispatch();
  return (
    <View style={style.container}>
      <View style={style.iconContianier}>
        <Icon
          color="white"
          size={28}
          backgroundColor="transparent"
          name={'logout'}
          onPress={() => dispatch(logOut())}
        />
      </View>
      <TopBar backgroundColor="#000D16" barStyle="light-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          flex: 8,
        }}>
        <Text>Home</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  iconContianier: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    top: 20,
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000D16',
  },
});
export default Home;
