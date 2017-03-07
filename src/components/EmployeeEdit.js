import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, EmployeeForm, ConfirmModal } from '.';

class EmployeeEdit extends Component {
  static navigationOptions = {
    title: 'Edit employee',
  };
  state = { showConfirm: false };

  onSaveButtonPress() {
    const { uid, name, phone, shift } = this.props;
    this.props.employeeSave({ uid, name, phone, shift });
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is on ${shift}`);
  }

  onDeleteButtonPress() {
    this.setState({ showConfirm: true });
  }

  onEmployeeDeleteAccept() {
    const { uid } = this.props;
    this.props.employeeDelete(uid);
  }

  onEmployeeDeleteDecline() {
    this.setState({ showConfirm: false });
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
        <CardSection>
          <Button
            title="Text schedule"
            onPress={this.onTextButtonPress.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button
            title="Delete employee"
            onPress={this.onDeleteButtonPress.bind(this)}
          />
        </CardSection>

        <ConfirmModal
          visible={this.state.showConfirm}
          text='Are you sure you want to delete this employee?'
          onAccept={this.onEmployeeDeleteAccept.bind(this)}
          onDecline={this.onEmployeeDeleteDecline.bind(this)}
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => employeeForm;
const EmployeeEditCon = connect(mapStateToProps,
                      { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
export { EmployeeEditCon as EmployeeEdit };
