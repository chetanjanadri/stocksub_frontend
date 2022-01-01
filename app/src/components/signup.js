import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import LoginService from '../../services/loginService';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      fullName: null,
    };
    this.loginService = new LoginService();
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={20}
        style={styles.loginContainer}>
        <View style={styles.heading}>
          <Text style={styles.appName}>LetsChat</Text>
        </View>
        <View style={styles.loginForm}>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Full name"
              onChangeText={(fullName) => this.setState({fullName})}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              this.loginService.signUp(
                this.state.email,
                this.state.password,
                this.state.fullName,
              )
            }>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.signUptextContainer}>
            <Text style={styles.signupText}>Already registered? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.signupLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
