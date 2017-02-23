import firebase from 'firebase';
import * as ActionsTypes from './types';

export const employeeUpdate = ({ prop, value }) => (
  {
    type: ActionsTypes.EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
);

export const employeeCreate = (employee) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push(employee);
};
