import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = (props) => (
  <View style={styles.headerView}>
    <Text style={styles.headerText}>{props.text}</Text>
  </View>
);

export { Header };
