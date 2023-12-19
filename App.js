import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rotas/Rotas';

export default function App(){
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7EA5D9" barStyle="light-content"/>
      <Rotas/>
    </NavigationContainer>
  );
}