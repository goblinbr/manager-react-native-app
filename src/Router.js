import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { LoginForm, EmployeeList, EmployeeCreate, EmployeeEdit } from './components';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth" initial>
      <Scene key="login" component={LoginForm} title="Login" />
    </Scene>
    <Scene key="main">
      <Scene
        key="employeeList"
        component={EmployeeList}
        title="Employees"
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
        initial
      />
      <Scene
        key="employeeCreate"
        component={EmployeeCreate}
        title="Add employee"
      />
      <Scene
        key="employeeEdit"
        component={EmployeeEdit}
        title="Edit employee"
      />
    </Scene>
  </Router>
);

export default RouterComponent;
