import { AppNavigator } from '../AppWithNavigationState';

export default (state, action) =>
  AppNavigator.router.getStateForAction(action, state) || state;
