import firebase from 'firebase';
import * as ActionsTypes from './types';

export const emailChanged = (text) => ({
  type: ActionsTypes.EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: ActionsTypes.PASSWORD_CHANGED,
  payload: text
});

const loginUserSuccess = (dispatch, user) =>
  dispatch({
    type: ActionsTypes.LOGIN_USER_SUCCESS,
    payload: user
  });

const loginUserFail = (dispatch) =>
  dispatch({
    type: ActionsTypes.LOGIN_USER_FAIL,
  });

const createAccount = (dispatch, email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));

export const loginUser = ({ email, password }) =>
  (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => createAccount(dispatch, email, password));
  };
