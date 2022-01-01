import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Alert} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Octicons';
import LoginService from '../../../services/loginService';
import {logout} from '../../../redux/auth/actions';
class MenuComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.loginService = new LoginService();
  }

  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          button={
            <TouchableOpacity onPress={this.showMenu}>
              <Icon name="kebab-vertical" size={20} />
            </TouchableOpacity>
          }>
          <MenuItem
            onPress={() => {
              this.hideMenu();
              this.props.navigation.navigate('UpdateProfile');
            }}>
            Profile
          </MenuItem>
          <MenuItem
            onPress={() => {
              Alert.alert(
                'Alert',
                'Do you want to logout?',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      this.hideMenu();
                      this.loginService.signOut(this.props.logout);
                    },
                  },
                  {
                    text: 'Cancel',
                  },
                ],
                {cancelable: false},
              );
            }}>
            Logout
          </MenuItem>
        </Menu>
      </View>
    );
  }
}

const mapDispatchToProps = {logout};

export default connect(() => ({}), mapDispatchToProps)(MenuComponent);
