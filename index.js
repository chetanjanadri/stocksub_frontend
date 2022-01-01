/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './app/redux/store';
import React, {Component} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
export const {store, persistor} = configureStore();
export default class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Application);
