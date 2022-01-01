/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LoginStack, DashboardStack} from './app/src/components/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
const App: () => React$Node = (props) => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {props.loggedInStatus === 'loggedIn' ? (
          <DashboardStack />
        ) : (
          <LoginStack />
        )}
      </NavigationContainer>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  loggedInStatus: state.auth.status,
});

export default connect(mapStateToProps)(App);
