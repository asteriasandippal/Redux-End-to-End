import React from 'react';
import { Provider } from 'react-redux';
import Rgb from './Rgb';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// import configureStore from '../store/configureStore';

function App () {
    return (
      <div className="App container">
        <Rgb/>
      </div>
    );
}
const store = createStore(rootReducer);

export default (
  <Provider store={store}>
    <App/>
  </Provider>
);
