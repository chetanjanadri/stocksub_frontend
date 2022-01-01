import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Login extends Component {
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
            <TextInput style={styles.inputText} placeholder="Email" />
          </View>
          <View style={styles.inputFieldContainer}>
            <TextInput style={styles.inputText} placeholder="Password" />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdPartyLogin}>
          <View style={styles.hairlineContainer}>
            <View style={styles.hairline} />
            <Text style={styles.loginButtonBelowText1}>OR</Text>
            <View style={styles.hairline} />
          </View>
          <View style={styles.thirdParties}>
            <Icon name="google-plus-square" size={40}></Icon>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    flex: 0.1,
    justifyContent: 'center',
  },
  loginForm: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  appName: {
    textAlign: 'center',
    fontSize: 50,
    color: '#809DCA',
  },
  inputFieldContainer: {
    marginHorizontal: '3%',
  },
  inputName: {
    fontSize: 25,
  },
  inputText: {
    padding: '4%',
    backgroundColor: '#809DCA',
    borderRadius: 10,
    marginTop: '2%',
    marginBottom: '4%',
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#809DCA',
    width: '25%',
    alignSelf: 'center',
    paddingVertical: '2%',
  },
  buttonText: {
    fontSize: 20,
  },
  thirdPartyLogin: {
    flex: 0.4,
    flexDirection: 'column',
  },
  hairlineContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hairline: {
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 10,
    width: 165,
  },
  thirdParties: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '4%',
  },
});
