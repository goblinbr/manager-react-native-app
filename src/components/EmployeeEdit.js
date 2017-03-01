import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, EmployeeForm } from '.';

class EmployeeEdit extends Component {
  componentWillMount() {
    const employee = this.props.employee;
    Object.keys(employee).forEach((prop) => {
      const value = employee[prop];
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSaveButtonPress() {
    const { uid, name, phone, shift } = this.props;
    this.props.employeeSave({ uid, name, phone, shift });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            title="Save"
            onPress={this.onSaveButtonPress.bind(this)}
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => employeeForm;
const EmployeeEditCon = connect(mapStateToProps,
                      { employeeUpdate, employeeSave })(EmployeeEdit);
export { EmployeeEditCon as EmployeeEdit };
