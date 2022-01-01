import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../rootReducer';
import {persistStore} from 'redux-persist';
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
function configureStore() {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  const persistor = persistStore(store);
  return {store, persistor};
}

export default configureStore;
