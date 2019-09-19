import React from 'react';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </>
  );
};

export default App;
