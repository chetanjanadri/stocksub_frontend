import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {saveLoginDetails} from '../../redux/auth/actions';
import LoginService from '../../services/loginService';
import {styles} from './styles';
class Login extends Component {
  constructor(props) {
    super(props);
    this.loginService = new LoginService();
    this.state = {
      email: null,
      password: null,
    };
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
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              this.loginService.signInWithPassword(
                this.state.email,
                this.state.password,
                this.props.saveLoginDetails,
              )
            }>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signUptextContainer}>
            <Text style={styles.signupText}>Not registered yet? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.signupLink}>sign up now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.thirdPartyLogin}>
          <View style={styles.hairlineContainer}>
            <View style={styles.hairline} />
            <Text style={styles.loginButtonBelowText1}>OR</Text>
            <View style={styles.hairline} />
          </View>
          <TouchableOpacity
            style={styles.thirdParties}
            onPress={() => this.loginService.signInwithGoogle()}>
            <Icon name="google-plus-square" size={40} color="#B23121" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const mapDispatchToProps = {
  saveLoginDetails,
};

export default connect(() => ({}), mapDispatchToProps)(Login);
