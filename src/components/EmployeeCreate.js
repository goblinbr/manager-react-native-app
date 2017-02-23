import React, { Component } from 'react';
import { Picker, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input } from '.';
import styles from './styles';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.inputLabel}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button
            title="Add"
            onPress={this.onButtonPress.bind(this)}
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => employeeForm;
const EmployeeCreateCon = connect(mapStateToProps,
                      { employeeUpdate, employeeCreate })(EmployeeCreate);
export { EmployeeCreateCon as EmployeeCreate };
