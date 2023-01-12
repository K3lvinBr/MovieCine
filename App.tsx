/**
 * @format
 */

import React from 'react';

// react-navigation
import { NavigationContainer } from '@react-navigation/native'

// routes
import AppRoutes from './src/routes/app.routes';
import { StatusBar } from 'react-native';

const App = () => {

  return (
      <NavigationContainer>
      <StatusBar hidden />
          <AppRoutes />    
      </NavigationContainer >
  )
};

export default App;
