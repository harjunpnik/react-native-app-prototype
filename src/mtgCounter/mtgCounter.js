import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

// Diemnsion variables
var { height, width } = Dimensions.get('window');
var box_count = 2;
var box_height = (height - 82) / box_count;

var colorBox_count = 5;
var box_width = width  / colorBox_count;

export default class MagicCounter extends React.Component {

  constructor() {
    super();
    this.state = {
      player1hp: 20,
      player2hp: 20,
      player1color: '#0d47a1',
      player2color: '#bf360c',
    };

  }
    


  static navigationOptions = {
    // header to null so we can use our own header/topBar
    header: null,
  };

  render() { 
    return (
      <View style={styles.container}>

        {/*TOP BAR*/}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.backTouchable} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              
              <Image style={styles.backArrow} source={require('../imgs/backArrow.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}> Magic Life Counter </Text>

        </View>


        <View>


        <View style={styles.container}>
            
            <View style={{height: box_height, backgroundColor: this.state.player1color, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '180deg'}]}}>

            {/*PLAYER 1*/}
            <View style={[styles.itemListColor, styles.upsideDown]}> 

                <View style={styles.spacer}></View>
                <View style={styles.green} >
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player1color: '#2e7d32' });
                  }} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.red}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player1color: '#bf360c' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.white}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player1color: '#eeeeee' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.blue}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player1color: '#0d47a1' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.black}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player1color: '#263238' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

              </View>
            
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
            
            {/*PLAYER 2*/}
            <View style={{height: box_height, backgroundColor: this.state.player2color}} >

              <View style={styles.itemListColor}> 

                <View style={styles.spacer}></View>
                <View style={styles.green} >
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player2color: '#2e7d32' });
                  }} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.red}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player2color: '#bf360c' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.white}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player2color: '#eeeeee' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.blue}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player2color: '#0d47a1' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

                <View style={styles.spacer}></View>
                <View style={styles.black}>
                  <TouchableOpacity onPress={() => {
                    this.setState ({ player2color: '#263238' });
                  }}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}></TouchableOpacity>
                </View>

              </View>

              <View style={styles.spacerTop}></View>

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
  spacer:{
    width: 15,
  },
  spacerTop:{
    height: 100,
  },
  upsideDown:{
    top: -100,
    left: -13,
  },
  itemListColor: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  green:{
    top: 10,
    left: 5,
    width: box_width - 20,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2e7d32',
  },
  red:{
    top: 10,
    left: 5,
    width: box_width - 20,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#bf360c',
  },
  white:{
    top: 10,
    left: 5,
    width: box_width - 20,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#eeeeee',
  },
  blue:{
    top: 10,
    left: 5,
    width: box_width - 20,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0d47a1',
  },
  black:{
    top: 10,
    left: 5,
    width: box_width - 20,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#263238',
  },
  itemColor:{
    top: 10,
    left: 5,
    width: box_width - 20,
    height: 40,
    
    borderRadius: 10,
  },
  itemList: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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


