import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { LoginForm, EmployeeList, EmployeeCreate, EmployeeEdit } from './components';

const AppNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  EmployeeList: { screen: EmployeeList },
  EmployeeCreate: { screen: EmployeeCreate },
  EmployeeEdit: { screen: EmployeeEdit }
});

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

const mapStateToProps = ({ nav }) => ({ nav });
const connectAppWithNavigationState = connect(mapStateToProps)(AppWithNavigationState);
export { connectAppWithNavigationState as AppWithNavigationState, AppNavigator };
