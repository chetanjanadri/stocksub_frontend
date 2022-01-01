import {combineReducers} from 'redux';
import {auth} from './app/redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const baseConfig = {storage: AsyncStorage, throttle: 10};
const authConfig = {...baseConfig, key: 'auth'};
const rootReducer = combineReducers({auth: persistReducer(authConfig, auth)});
export default rootReducer;
