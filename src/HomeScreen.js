import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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

            <View style={styles.itemList}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Char')} style={styles.item}>
                  
                  <Image style={styles.icon} source={require('./imgs/stats.png')}/>
                  <Text style={styles.imgText} >Character Stats</Text>
                </TouchableOpacity>
                
                <View style={styles.spacer}></View>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Dice')} style={styles.item}>
                  
                  <Image style={styles.icon} source={require('./imgs/die.png')}/>
                  <Text style={styles.imgText} >Dice Roller</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.spacerTop}></View>

            <View style={styles.itemList}>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Magic')} style={styles.item}>
                
                <Image style={styles.icon} source={require('./imgs/mtg.png')}/>
                <Text style={styles.imgText} >MTG Counter</Text>
              </TouchableOpacity>

              <View style={styles.spacer}></View>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Turn')} style={styles.item}>
                
                <Image style={styles.icon} source={require('./imgs/list.png')}/>
                <Text style={styles.imgText} >Turn Order</Text>
              </TouchableOpacity>

            </View>

      </View>
      
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    itemList: {
      top: 10,
      flexDirection: 'row', 
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    spacer:{
      width: 20,
    },
    spacerTop:{
      height: 10,
    },
    item:{
      backgroundColor: '#1565c0',
      width: 180 ,
      height: 205,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      
    },
    icon:{
      top: 5,
      width: 170, 
      height: 170,
      justifyContent: 'center',
    },
    imgText:{
      top: 5,
      bottom: 5,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
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
      width: 100, 
      height: 100,
      justifyContent: 'center',
    }
  });
  
  