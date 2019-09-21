import React from 'react';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
};

export default App;
