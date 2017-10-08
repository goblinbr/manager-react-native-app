import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView } from 'react-native';
import { employeesFetch } from '../actions';
import { EmployeeListItem, CardSection } from '.';
import AddEmployeeButton from './AddEmployeeButton';
import LogoutButton from './LogoutButton';

class EmployeeList extends Component {
  static navigationOptions = {
    title: 'Employees',
    headerRight: <LogoutButton />,
    headerLeft: null
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
      <ScrollView>
        <CardSection>
          <AddEmployeeButton />
        </CardSection>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  let employees = [];
  const stateEmployees = state.employees;
  if (stateEmployees) {
    employees = Object.keys(stateEmployees).map((uid) => {
        const val = stateEmployees[uid];
        return { ...val, uid };
    });
  }
  return { employees };
};

const EmployeeListConnect = connect(mapStateToProps, { employeesFetch })(EmployeeList);
export { EmployeeListConnect as EmployeeList };
