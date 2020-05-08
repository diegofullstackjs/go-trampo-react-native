/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Routes from './routes/index'
function App(){
  return(
  <>
  <StatusBar backgroundColor="#fdcb6e" barStyle="dark-content"/>
     <Routes />
  </>
  );
}

export default App;
