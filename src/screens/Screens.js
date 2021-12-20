import React, {createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreens from './AuthScreen';
import AppScreens from './AppScreens';
import {useSelector} from 'react-redux';

export const navigationRef = createRef();

const Screens = () => {
  const authToken = useSelector(({auth: {token}}) => token);

  return (
    <NavigationContainer ref={navigationRef}>
      {authToken ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};
Screens.prototypes = {};
export default Screens;
