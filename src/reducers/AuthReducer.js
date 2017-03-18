import {
      EMAIL_CHANGED,
      PASSWORD_CHANGED,
      LOGIN_USER_SUCCESS,
      LOGIN_USER_FAIL,
      LOGIN_USER_START,
      LOGOUT_USER_SUCCESS
    } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: 'unknown',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: null };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Invalid password', password: '', loading: false };
    default:
      return state;
  }
};
