import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {},
  slogan: {
    paddingVertical: 25,
  },
  body: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  buttons: {width: '100%', marginBottom: 28},
  'trial-container': {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'pending-container': {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  goback: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  arrow: {
    marginLeft: 25,
    color: '#2A2B37',
  },
  forgote: {
    fontSize: 14,
    color: '#FC3838',
    textTransform: 'uppercase',
  },
});
