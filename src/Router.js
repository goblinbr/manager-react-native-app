import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { LoginForm, EmployeeList } from './components';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Login" initial />
    </Scene>
    <Scene key="main">
      <Scene
        key="employeeList"
        component={EmployeeList}
        title="Employees"
        rightTitle="Add"
        onRight={() => console.log('Add')}
      />
    </Scene>
  </Router>
);

export default RouterComponent;
