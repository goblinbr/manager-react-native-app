import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    return (
      <View>
        <Text>Empoyee 1</Text>
        <Text>Empoyee 2</Text>
        <Text>Empoyee 3</Text>
        <Text>Empoyee 4</Text>
        <Text>Empoyee 5</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const stateEmployees = state.employees;
  const employees = Object.keys(stateEmployees).map((uid) => {
      const val = stateEmployees[uid];
      return { ...val, uid };
  });
  return { employees };
};

const EmployeeListConnect = connect(mapStateToProps, { employeesFetch })(EmployeeList);
export { EmployeeListConnect as EmployeeList };
