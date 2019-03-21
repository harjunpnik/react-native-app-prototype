import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions,Button } from 'react-native';
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
//import TopBar from '../components/TopBar.js';
//import Note from './Note.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

var { height } = Dimensions.get('window');
var box_count = 2;
var box_height = (height - 82) / box_count;

export default class MagicCounter extends React.Component {

  constructor() {
    super();
    this.state = {
      player1hp: 20,
      player2hp: 20,
    };

  }
  

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
            <Text style={styles.headerText}> Magic Life Counter </Text>

        </View>


        <View>


        <View style={styles.container}>
            
            <View style={[styles.box, styles.box1]}>
            
            <View style={styles.itemList}> 

                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.setState({player1hp : this.state.player1hp - 1})} hitSlop={{top: 40, bottom: 10, left: 10, right: 10}}>
                    <Text style={styles.Text}>-</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.item}>
                  <Text style={styles.Text}>{this.state.player1hp}</Text>
                </View>

                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.setState({player1hp : this.state.player1hp + 1})} hitSlop={{top: 40, bottom: 10, left: 10, right: 10}}>
                    <Text style={styles.Text}>+</Text>
                  </TouchableOpacity>
                </View>

            </View>
            
            </View>
            
            <View style={[styles.box, styles.box2]}>

              <View style={styles.itemList}> 

                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.setState({player2hp : this.state.player2hp - 1})} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                    <Text style={styles.Text}>-</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.item}>
                  <Text style={styles.Text}>{this.state.player2hp}</Text>
                </View>

                <View style={styles.item}>
                  <TouchableOpacity onPress={() => this.setState({player2hp : this.state.player2hp + 1})} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                    <Text style={styles.Text}>+</Text>
                  </TouchableOpacity>
                </View>

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
    flexDirection: 'column',
  },
  box: {
    height: box_height,
  },
  box1: {
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '180deg'}],
  },
  box2: {
    backgroundColor: '#8BC34A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemList: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  item:{
    width: 80 ,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    color: 'white',
    fontSize: 60,
    top: 0,
    right: 4,
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
    width: 24, 
    height: 24,
  },
});


