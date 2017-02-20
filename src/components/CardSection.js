import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CardSection = (props) => (
    <View style={styles.cardSection}>
      {props.children}
    </View>
);

export { CardSection };
