import { NavigationActions } from 'react-navigation';

const navigateTo = (dispatch, routeName, resetStack) => {
  if (resetStack) {
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    }));
  } else {
    dispatch(NavigationActions.navigate({ routeName }));
  }
};

export default navigateTo;
