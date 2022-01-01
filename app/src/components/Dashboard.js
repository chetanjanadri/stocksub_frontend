import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import TopBar from './TopBar';
import Conversations from './Conversations';
import SearchBar from './SearchBar';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {searchEnabled: false};
  }
  showSearchBar = (searchEnabled) => {
    this.setState({searchEnabled});
  };
  render() {
    return this.state.searchEnabled ? (
      <View style={styles.mainContainer}>
        <SearchBar showSearchBar={this.showSearchBar} />
      </View>
    ) : (
      <View style={styles.mainContainer}>
        <TopBar
          navigation={this.props.navigation}
          showSearchBar={this.showSearchBar}
        />
        <Conversations navigation={this.props.navigation} />
      </View>
    );
  }
}
