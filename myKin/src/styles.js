import { StyleSheet } from 'react-native';
import { secondaryColor, defaultBackgroundColor } from './style/colors';

export default StyleSheet.create({
  fadedText: {
    color: '#A0A0A0',
  },
  primary: {
    color: '#00AFD8',
  },
  white: {
    color: '#FFF',
  },
  primaryBg: {
    backgroundColor: '#00AFD8',
  },
  whiteBg: {
    backgroundColor: '#FFF',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#D0CCCC',
    height: 50,
    margin: 10,
    padding: 10,
  },
  orangeButton: {
    backgroundColor: '#FFA115',
    borderRadius: 5,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  buttonSecondary: {
    borderColor: secondaryColor,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  secondaryBg: {
    backgroundColor: secondaryColor,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    padding: 10,
  },
  secondaryText: { color: secondaryColor },
  inverseText: { color: defaultBackgroundColor },
  fullWidthButtons: { flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' },
});
