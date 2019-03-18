import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

//import Navigation from './Navigation.js';
import {StackNavigator} from 'react-navigation';

export default class TopBar extends React.Component {
  render() {
    return (
        
        <View style={styles.header}>
          <TouchableOpacity  style={styles.backTouchable} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            
            <Image style={styles.backArrow} source={require('../imgs/backArrow.png')}/>
          </TouchableOpacity>
          <Text style={styles.headerText}> {this.props.name} </Text>

        </View>
        
    );
  }
}

const styles = StyleSheet.create({
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
