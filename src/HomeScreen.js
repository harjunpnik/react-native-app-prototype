import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {
    
  // I strugled with passing the props.navigation to TopBar.js so lets do it all in one file...
  static navigationOptions = {
    // header to null so we can use our own header/topBar
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
            {/* TOP BAR*/}
            <View style={styles.header}>
                <Text style={styles.headerText}> Board Game Counters </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                title="Turn Order"
                onPress={() => this.props.navigation.navigate('Turn')}
                />
                <Button
                title="MTG Counter"
                onPress={() => this.props.navigation.navigate('Magic')}
                />
                <Button
                title="Dice Roller"
                onPress={() => this.props.navigation.navigate('Dice')}
                />
                <Button
                title="Character Stats"
                onPress={() => this.props.navigation.navigate('Char')}
                />
            </View>

      </View>
      
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    header:{
      backgroundColor: '#1565c0',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 3,
      borderBottomColor: '#dddddd',
      flexDirection: "row"
    },
    headerText:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      paddingTop: 36,
      paddingBottom: 16,
    },
    backTouchable:{
      position: 'absolute', 
      top: 40,
      left: 16,
      width: 24, 
      height: 24,
    },
    backArrow:{
      width: 24, 
      height: 24,
    }
  });
  
  