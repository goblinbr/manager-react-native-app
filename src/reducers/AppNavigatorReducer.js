import { AppNavigator } from '../AppWithNavigationState';

export default (state, action) => {
  console.log(action);
  return AppNavigator.router.getStateForAction(action, state) || state;
};
