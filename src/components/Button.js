import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

const ButtonContainer = (props) => (
    <View style={styles.buttonContainer}>
      <Button
        title={props.title}
        onPress={props.onPress}
      />
    </View>
);

export { ButtonContainer as Button };
