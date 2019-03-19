import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
//import TopBar from '../components/TopBar.js';
//import Note from './Note.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class charStats extends React.Component {

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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.backTouchable} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              
              <Image style={styles.backArrow} source={require('../imgs/backArrow.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}> Character Stats </Text>

        </View>
        <View>
          <Text>Character Stats</Text>
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
  },
});


