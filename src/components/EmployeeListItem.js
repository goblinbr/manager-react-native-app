import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeEdit } from '../actions';
import { CardSection } from '.';
import styles from './styles';

class EmployeeListItem extends Component {
  onPress() {
    this.props.employeeEdit(this.props.employee);
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

const connectEmployeeListItem = connect(null, { employeeEdit })(EmployeeListItem);
export { connectEmployeeListItem as EmployeeListItem };
