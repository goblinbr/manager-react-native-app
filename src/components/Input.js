import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

const Input = (props) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{props.label}</Text>
    <TextInput
      style={styles.inputTextInput}
      onChangeText={props.onChangeText}
      value={props.value}
      autoCorrect={props.autoCorrect}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  </View>
);

export { Input };
