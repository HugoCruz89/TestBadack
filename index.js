import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {name as appName} from './app.json';
import Screens from './src/screens/Screens';

import {store, persistor} from './src/store';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);
export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Screens />
      </PersistGate>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => Root);
