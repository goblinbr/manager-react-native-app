import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import { EmployeeListItem } from '.';
import AddEmployeeButton from './AddEmployeeButton';

class EmployeeList extends Component {
  static navigationOptions = {
    title: 'Employees',
    header: {
      right: <AddEmployeeButton />
    }
  };

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

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
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
