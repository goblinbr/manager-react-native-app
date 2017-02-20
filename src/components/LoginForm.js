import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
//import firebase from 'firebase';
import { emailChanged } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from '.';
import styles from './styles';

class LoginForm extends Component {

  onButtonPress() {
  }

  renderError() {
    //if (this.state.error) {
    if (1 === 2) {
      return (
        <CardSection>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {this.state.error}
            </Text>
          </View>
        </CardSection>
      );
    }
    return undefined;
  }

  renderButtonOrSpinner() {
    //if (this.state.loading) {
    if (1 === 2) {
      return (
        <Spinner size="small" />
      );
    }
    return (
      <Button
        title="Log in"
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="E-mail"
            onChangeText={email => this.props.emailChanged(email)}
            value={this.props.email}
            autoCorrect={false}
            placeholder="your_email@server.com"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            autoCorrect={false}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButtonOrSpinner()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email
});

const connectLoginForm = connect(mapStateToProps, { emailChanged })(LoginForm);
export { connectLoginForm as LoginForm };
