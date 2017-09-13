import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './src/screens/mainScreen';
import PhotoScreen from './src/screens/photoScreen';


const SimpleApp = StackNavigator({
  Home: { screen: MainScreen },
  Photo: { screen: PhotoScreen },
});

export default SimpleApp;