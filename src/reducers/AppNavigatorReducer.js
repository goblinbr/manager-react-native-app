import { AppNavigator } from '../AppWithNavigationState';

export default (state, action) => {
  return AppNavigator.router.getStateForAction(action, state) || state;
};
