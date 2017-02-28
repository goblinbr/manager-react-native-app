import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as ActionsTypes from './types';

export const employeeUpdate = ({ prop, value }) => (
  {
    type: ActionsTypes.EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
);

export const employeeCreate = (employee) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push(employee)
      .then(() => {
        dispatch({ type: ActionsTypes.EMPLOYEE_CREATE });
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
