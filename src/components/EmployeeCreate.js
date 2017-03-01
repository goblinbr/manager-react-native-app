import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, EmployeeForm } from '.';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
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
                      { employeeCreate })(EmployeeCreate);
export { EmployeeCreateCon as EmployeeCreate };
