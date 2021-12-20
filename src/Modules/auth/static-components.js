import React, {useRef} from 'react';
import {oneOf, string} from 'prop-types';
import {Image, View, Dimensions} from 'react-native';
import {Button, Text} from 'components';
const windowHeight = Dimensions.get('window').height;

function Slogan(props) {
  return (
    <Text
      style={[sloganStyle, props.style]}
      textAlign="left"
      type="body"
      color={props.color}>
      Obtain unfiltered insight on how others like you excel at life and
      business on a daily basis.
    </Text>
  );
}

const sloganStyle = {
  maxWidth: '90%',
  top: 17,
};

Slogan.propTypes = {
  color: oneOf(['white', 'black']),
};

Slogan.defaultProps = {
  color: 'white',
};

function Join() {
  const year = useRef(new Date().getFullYear());
  return (
    <>
      <View style={termsContainerStyle}>
        <Text>
          <Text>Not a member?</Text>
          <Text style={{fontWeight: 'bold'}}> Join the Club</Text>
        </Text>
      </View>
    </>
  );
}

function Separator(props) {
  return <View style={separatorStyle} />;
}

const separatorStyle = {
  borderBottomColor: '#dadada',
  borderBottomWidth: 1,
  marginTop: windowHeight * 0.03,
  marginBottom: 22,
};

const termsContainerStyle = {

  alignItems: 'center',
  marginVertical: 20,
  
};

const termsStyle = {
  textAlign: 'center',
  color: '#828282',
};

export {Slogan, Join, Separator};
