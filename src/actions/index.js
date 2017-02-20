import * as ActionsTypes from './types';

export const emailChanged = (text) => ({
  type: ActionsTypes.EMAIL_CHANGED,
  payload: text
});
