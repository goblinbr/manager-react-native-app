import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as ActionsTypes from './types';

export const employeeUpdate = ({ prop, value }) => (
  {
    type: ActionsTypes.EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
);

export const employeeClear = () => (
  {
    type: ActionsTypes.EMPLOYEE_CLEAR
  }
);

export const employeeCreate = (employee) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push(employee)
      .then(() => {
        dispatch({ type: ActionsTypes.EMPLOYEE_CLEAR });
        Actions.employeeList({ type: 'reset' });
      });
  };
};


export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: ActionsTypes.EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


export const employeeSave = (employee) => {
  const { currentUser } = firebase.auth();
  const { uid, ...employeeFields } = employee;
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set(employeeFields)
      .then(() => {
        dispatch({ type: ActionsTypes.EMPLOYEE_CLEAR });
        Actions.employeeList({ type: 'reset' });
      });
  };
};


export const employeeDelete = (uid) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: ActionsTypes.EMPLOYEE_CLEAR });
        Actions.employeeList({ type: 'reset' });
      });
  };
};
