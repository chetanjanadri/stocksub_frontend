import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchInput} autoFocus={true} />
        <TouchableOpacity
          style={styles.close}
          onPress={() => this.props.showSearchBar(false)}>
          <Icon name="close" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchBar;
