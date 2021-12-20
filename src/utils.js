import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isEmail = email => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'i',
  );
  return regex.test(email);
};
export const isInteger = integer => {
  const regex = new RegExp(/^[+]?[1-9]\d*$/, 'i');
  return regex.test(integer);
};
export const isDecimal = integer => {
  const regex = new RegExp(/^(10|\d)(\.\d{1,2})?$/, 'i');
  return regex.test(integer);
};

export const clearAppData = async function () {
  try {
    let keys = (await AsyncStorage.getAllKeys()) || [];
    if (keys.length) {
      await AsyncStorage.multiRemove(keys);
    }
  } catch (error) {
    console.log({error});
    console.error('Error clearing app data.');
  }
};

export const windowWidth = Dimensions.get('window').width;

export const windowHeight = Dimensions.get('window').height;
