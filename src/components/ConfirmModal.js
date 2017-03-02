import React from 'react';
import { Text, View, Modal, Button } from 'react-native';
import { CardSection } from '.';
import styles from './styles';

const ConfirmModal = (props) => (
  <Modal
    animationType="slide"
    onRequestClose={props.onDecline}
    transparent
    visible={props.visible}
  >
    <View style={styles.confirmModalView}>
      <CardSection>
        <Text style={styles.confirmModalText}>{props.text}</Text>
      </CardSection>

      <CardSection>
        <View style={styles.confirmModalButtonView}>
          <View style={styles.confirmModalButton}>
            <Button
              title="Yes"
              onPress={props.onAccept}
            />
          </View>
          <View style={styles.confirmModalButton}>
            <Button
              title="No"
              onPress={props.onDecline}
            />
          </View>
        </View>
      </CardSection>
    </View>
  </Modal>
);

export { ConfirmModal };
