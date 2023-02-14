/**
 * @format
 */

import React from 'react';

// react-navigation
import { NavigationContainer } from '@react-navigation/native'

// routes
import AppRoutes from './src/routes/app.routes';
import { StatusBar } from 'react-native';

//redux
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
      <StatusBar hidden />
          <AppRoutes />    
      </NavigationContainer >
      </Provider>
  )
};

export default App;
