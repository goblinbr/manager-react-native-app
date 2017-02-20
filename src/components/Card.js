import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Card = (props) => (
    <View style={styles.card}>
      {props.children}
    </View>
);

export { Card };
