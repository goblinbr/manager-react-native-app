import firebase from 'firebase';
import * as ActionsTypes from './types';
import navigateTo from './navigateTo';

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

export const employeeEdit = (employee) =>
  (dispatch) => {
    Object.keys(employee).forEach((prop) => {
      const value = employee[prop];
      dispatch(employeeUpdate({ prop, value }));
    });

    navigateTo(dispatch, 'EmployeeEdit', false);
  };

export const employeeAdd = () =>
(dispatch) => {
  dispatch(employeeClear());
  navigateTo(dispatch, 'EmployeeCreate', false);
};

export const employeeCreate = (employee) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push(employee)
      .then(() => {
        dispatch({ type: ActionsTypes.EMPLOYEE_CLEAR });
        navigateTo(dispatch, 'EmployeeList', true);
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
        navigateTo(dispatch, 'EmployeeList', true);
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
        navigateTo(dispatch, 'EmployeeList', true);
      });
  };
};
