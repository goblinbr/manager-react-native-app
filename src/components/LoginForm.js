import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
//import firebase from 'firebase';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from '.';
import styles from './styles';

class LoginForm extends Component {

  renderError() {
    if (this.props.error) {
      return (
        <CardSection>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {this.props.error}
            </Text>
          </View>
        </CardSection>
      );
    }
    return undefined;
  }

  renderButtonOrSpinner() {
    if (this.props.loading) {
      return (
        <Spinner size="small" />
      );
    }
    return (
      <Button
        title="Log in"
        onPress={() => this.props.loginUser({
          email: this.props.email,
          password: this.props.password
        })}
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="E-mail"
            onChangeText={text => this.props.emailChanged(text)}
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
            onChangeText={text => this.props.passwordChanged(text)}
            value={this.props.password}
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

const mapStateToProps = ({ auth }) => auth;

const connectLoginForm = connect(mapStateToProps, {
                            emailChanged,
                            passwordChanged,
                            loginUser
                          })(LoginForm);
export { connectLoginForm as LoginForm };
