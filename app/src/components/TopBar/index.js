import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import MenuComponent from '../Menu';
import Icon from 'react-native-vector-icons/Octicons';
class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.topBarContainer}>
        <Text style={styles.headingText}> Chatter </Text>
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => this.props.showSearchBar(true)}>
          <Icon name="search" size={20} />
        </TouchableOpacity>
        <MenuComponent navigation={this.props.navigation} />
      </View>
    );
  }
}

export default TopBar;
