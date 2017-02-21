import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';

const Input = (props) => (
  <View style={styles.inputContainer}>
    <View>
      <Text style={styles.inputLabel}>{props.label}</Text>
    </View>
    <View>
      <TextInput
        style={styles.inputTextInput}
        onChangeText={props.onChangeText}
        value={props.value}
        autoCorrect={props.autoCorrect}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  </View>
);

export { Input };
