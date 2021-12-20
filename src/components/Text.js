import React, {useRef} from 'react';
import {string, oneOf, oneOfType, array, number, func} from 'prop-types';
import {Text as TextLib, StyleSheet} from 'react-native';

const INLINE_STYLES = [
  'textAlign',
  'color',
  'fontWeight',
  'lineHeight',
  'fontSize',
  'textTransform',
];

function _inlineStyle(props) {
  let _style = {};
  INLINE_STYLES.forEach(item => {
    if (props.hasOwnProperty(item)) {
      _style[item] = props[item];
    }
  });
  return _style;
}

function Text(props) {
  const {children, type, style, ...rest} = props;

  const inlineCustom = useRef(_inlineStyle(rest));

  return (
    <TextLib
      style={[styles[type], style, inlineCustom.current]}
      onTextLayout={props.onTextLayout}
      numberOfLines={props.numberOfLines}>
      {children}
    </TextLib>
  );
}

Text.propTypes = {
  children: oneOfType([string, number, array]),
  fontSize: number,
  textAlign: oneOf(['center', 'left', 'right']),
  color: string,
  type: oneOf(['title', 'body', 'header', 'subtitle']),
  fontWeight: string,
  textTransform: string,
  numberOfLines: number,
  onTextLayout: func,
};

Text.defaultProps = {
  type: 'body',
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 20,
   
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 2,
    fontStyle: 'normal',
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 14,
    color: '#ffffff',
    letterSpacing: 2,
    textAlign: 'center',
  },
  header: {
    fontWeight: '500',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#43485C',
  },
  body: {
    fontSize: 14,
    color: '#ffffff',
    fontStyle: 'normal',
  },
});

export default Text;
