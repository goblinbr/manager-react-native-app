import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { LoginForm } from './components';


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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
