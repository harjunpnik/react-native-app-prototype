import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
//import TopBar from '../components/TopBar.js';
//import Note from './Note.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class charStats extends React.Component {

  constructor() {
    super();
    this.state = {
      str: 1, 
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1,
      strMod: -5, 
      dexMod: -5,
      conMod: -5,
      intMod: -5,
      wisMod: -5,
      chaMod: -5,
    };

  }

  // I strugled with passing the props.navigation to TopBar.js so lets do it all in one file...
  static navigationOptions = {
    // header to null so we can use our own header/topBar
    header: null,
  };

  calcModValue(statValue){
    let modValue = null;
    if( statValue <= 1){
      modValue = -5;
    }else if (statValue == 2 || statValue == 3) {
      modValue = -4;
    }else if (statValue == 4 || statValue == 5) {
      modValue = -3;
    }else if (statValue == 6 || statValue == 7) {
      modValue = -2;
    }else if (statValue == 8 || statValue == 9) {
      modValue = -1;
    }else if (statValue == 10 || statValue == 11) {
      modValue = 0;
    }else if (statValue == 12 || statValue == 13) {
      modValue = 1;
    }else if (statValue == 14 || statValue == 15) {
      modValue = 2;
    }else if (statValue == 16 || statValue == 17) {
      modValue = 3;
    }else if (statValue == 18 || statValue == 19) {
      modValue = 4;
    }else if (statValue == 20 || statValue == 21) {
      modValue = 5;
    }else if (statValue == 22 || statValue == 23) {
      modValue = 6;
    }else if (statValue == 24 || statValue == 25) {
      modValue = 7;
    }else if (statValue == 26 || statValue == 27) {
      modValue = 8;
    }else if (statValue == 28 || statValue == 29) {
      modValue = 9;
    }else if (statValue >= 30) {
      modValue = 10;
    }


  return(modValue);
}

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
        <View style={styles.statBlock}>

          <View style={styles.statList}>

            <View style={styles.item}> 
              <Text style={styles.flavourText}>STR</Text>
            </View>

            <View style={styles.item}> 
                <Button
                    title="-"
                    onPress={() => {
                      this.setState ({ str: this.state.str - 1 });
                      const modValue = this.calcModValue(this.state.str - 1);
                      this.setState ({ strMod: modValue});
                    }}
                />
            </View>

            <View style={styles.item}>

              <View style={styles.resultBox}>
                <Text style={styles.Text}> {this.state.str}</Text>
              </View>

            </View>

            <View style={styles.item}> 
                <Button
                    title="+"
                    onPress={() => {
                      this.setState ({ str: this.state.str + 1 });
                      const modValue = this.calcModValue(this.state.str + 1);
                      this.setState ({ strMod: modValue});
                    }}
                />
            </View>

            <View style={styles.item}> 
              <Text style={styles.flavourText}>MOD</Text>
            </View>

            <View style={styles.spacer}></View>

            <View style={styles.item}>
            
              <View style={styles.resultBox}> 
                  <Text style={styles.Text}> {this.state.strMod}</Text>
              </View>

            </View>

          </View>

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
  spacer:{
    width: 5,
  },
  flavourText:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  statList: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item:{
      
    width: 40 ,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    
  },
  Text:{
      
      
      color: 'white',
      fontSize: 25,
      top: 0,
      right: 4,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      
    },
    resultBox:{
      backgroundColor: '#1565c0',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      width: 40 ,
      height: 40,
    },
  statBlock:{
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
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


