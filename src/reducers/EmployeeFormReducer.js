import {
      EMPLOYEE_UPDATE,
      EMPLOYEE_CREATE
    } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
