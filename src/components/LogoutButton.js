import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View } from 'react-native';
import { logout } from '../actions';

class LogoutButtonComp extends Component {
  render() {
    return (
      <View style={{ marginLeft: 15 }}>
        <Button
          title="Logout"
          onPress={() => this.props.logout()}
        />
      </View>
    );
  }
}

const LogoutButton = connect(null, { logout })(LogoutButtonComp);
export default LogoutButton;
