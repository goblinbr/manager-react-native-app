import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View } from 'react-native';
import { employeeAdd } from '../actions';

class AddEmployeeButtonComp extends Component {
  render() {
    return (
      <View style={{ margin: 15 }}>
        <Button
          title="New employee"
          onPress={() => this.props.employeeAdd()}
        />
      </View>
    );
  }
}

const AddEmployeeButton = connect(null, { employeeAdd })(AddEmployeeButtonComp);
export default AddEmployeeButton;
