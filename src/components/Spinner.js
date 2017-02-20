import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Spinner = (props) => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator size={props.size || 'large'} />
  </View>
);

export { Spinner };
