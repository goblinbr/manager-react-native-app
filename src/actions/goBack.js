import { NavigationActions } from 'react-navigation';

const goBack = (dispatch) => {
  dispatch(NavigationActions.back({
    key: null
  }));
};

export default goBack;
