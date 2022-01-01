import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    justifyContent: 'center',
    height: '25%',
  },
  loginForm: {
    justifyContent: 'center',
    height: '50%',
  },
  appName: {
    textAlign: 'center',
    fontSize: 55,
    color: '#809DCA',
    paddingTop: '10%',
  },
  inputFieldContainer: {
    marginHorizontal: '3%',
  },
  inputName: {
    fontSize: 35,
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
  signUptextContainer: {
    paddingTop: '6%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: '4%',
  },
  signupText: {},
  signupLink: {
    color: '#678ac2',
    fontWeight: 'bold',
  },
  thirdPartyLogin: {
    height: '25%',
  },
  hairlineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '2%',
  },
  hairline: {
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 10,
    width: 165,
  },
  thirdParties: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '4%',
    marginHorizontal: '6%',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
