import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from './Button';

import {BUTTON_SIZE as SIZE} from '@env';
const BUTTON_SIZE = parseInt(SIZE, 10);

export default function GamePad({sendMessage}) {
  return (
    <View style={styles.container}>
      <Button
        sendMessage={sendMessage}
        command="forward"
        cancelCommand="DS"
        color="green"
        style={{...styles.control, ...styles.forward}}
      />
      <Button
        sendMessage={sendMessage}
        command="backward"
        cancelCommand="DS"
        color="green"
        style={{...styles.control, ...styles.backward}}
      />
      <Button
        sendMessage={sendMessage}
        command="left"
        cancelCommand="TS"
        color="green"
        style={{...styles.control, ...styles.left}}
      />
      <Button
        sendMessage={sendMessage}
        command="right"
        cancelCommand="TS"
        color="green"
        style={{...styles.control, ...styles.right}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    left: 30,
    padding: 10,
    width: BUTTON_SIZE * 3,
    height: BUTTON_SIZE * 3,
  },
  control: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'white',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
  },
  forward: {
    top: 0,
    left: BUTTON_SIZE,
  },
  backward: {
    top: BUTTON_SIZE * 2,
    left: BUTTON_SIZE,
  },
  left: {
    top: BUTTON_SIZE,
    left: 0,
  },
  right: {
    top: BUTTON_SIZE,
    left: BUTTON_SIZE * 2,
  },
});
