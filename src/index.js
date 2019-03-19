import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TurnOrder from './turnOrder/TurnOrder.js';
import MTGCounter from './mtgCounter/mtgCounter.js';
import DiceRoller from './diceRoller/DiceRoller.js';
import CharStats from './charStats/charStats.js';
import HomeScreen from './HomeScreen.js';
  
  const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Turn: TurnOrder,
      Magic: MTGCounter,
      Dice: DiceRoller,
      Char: CharStats,
    },
    {
      initialRouteName: "Home"
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}