import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBLjeVwu0m3UEFDujxX0t6ZuX-3D8LeJRU',
      authDomain: 'manager-react-native-app.firebaseapp.com',
      databaseURL: 'https://manager-react-native-app.firebaseio.com',
      storageBucket: 'manager-react-native-app.appspot.com',
      messagingSenderId: '679440854575'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
