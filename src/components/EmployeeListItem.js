import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '.';
import styles from './styles';

class EmployeeListItem extends Component {
  onPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.employeeListItemText}>
              {this.props.employee.name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export { EmployeeListItem };
