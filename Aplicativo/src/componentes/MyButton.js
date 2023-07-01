import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {COLORS} from '../assets/colors';

const MyButton = props => {
  //console.log(props);
  return (
    <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
      <Text style={styles.text}>{props.texto}</Text>
    </TouchableHighlight>
  );
};
export default MyButton;

const styles = StyleSheet.create({
  text: {
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: '800',
    color: 'white',
  },
  button: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secundary,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
});
