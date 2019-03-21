import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
//import TopBar from '../components/TopBar.js';
//import Note from './Note.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class DiceRoller extends React.Component {

    constructor() {
        super();
        this.state = {
          d4Result: null, 
          d6Result: null,
          d8Result: null,
          d10Result: null,
          d12Result: null,
          d20Result: null,
          d100Result: null
        };
    
      }

      
  rolldiebutton(min, max){
    const minValue = min;
    const maxValue = max;
    const randomValue = Math.floor(Math.random() * maxValue) + minValue;
return(randomValue)
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
            <Text style={styles.headerText}> Dice Roller </Text>

        </View>
        <View style={styles.diceContainer}></View>
        
        <View style={styles.spacerTop}></View>
        <View style={styles.spacerTop2}></View>
        <View style={styles.spacerTop2}></View>

        <View style={styles.itemList}>
            <View style={styles.item}>
            <View style={styles.resultBox}>
            <Text style={styles.Text}> {this.state.d4Result}</Text>
            </View>

            <View style={styles.spacerTop2}></View>
                <Button raised
                    title=" roll    d4"
                    onPress={() => {
                        const randomValue = this.rolldiebutton(1,4);
                        this.setState ({ d4Result: randomValue })
                      }}
                />
            </View>

            <View style={styles.spacer}></View>

            <View style={styles.item}>
            <View style={styles.resultBox}>
            <Text style={styles.Text}> {this.state.d6Result}</Text>
            </View>

            <View style={styles.spacerTop2}></View>
                <Button raised
                    title=" roll    d6"
                    onPress={() => {
                        const randomValue = this.rolldiebutton(1,6);
                        this.setState ({ d6Result: randomValue })
                      }}
                />
            </View>

            <View style={styles.spacer}></View>

            <View style={styles.item}>
            <View style={styles.resultBox}>
            <Text style={styles.Text}> {this.state.d8Result}</Text>
            </View>

            <View style={styles.spacerTop2}></View>
                <Button raised
                    title=" roll    d8"
                    onPress={() => {
                        const randomValue = this.rolldiebutton(1,8);
                        this.setState ({ d8Result: randomValue })
                      }}
                />
            </View>
        </View>

        <View style={styles.spacerTop}></View> 

        <View style={styles.itemList}>
            <View style={styles.item}>
            <View style={styles.resultBox}>
            <Text style={styles.Text}> {this.state.d10Result}</Text>
            </View>

            <View style={styles.spacerTop2}></View>
                <Button raised
                    title=" roll d10"
                    onPress={() => {
                        const randomValue = this.rolldiebutton(0,9);
                        this.setState ({ d10Result: randomValue })
                      }}
                />
            </View>

            <View style={styles.spacer}></View>

            <View style={styles.item}>
            <View style={styles.resultBox}>
            <Text style={styles.Text}> {this.state.d12Result}</Text>
            </View>

            <View style={styles.spacerTop2}></View>
                <Button raised 
                    title=" roll d12"
                    onPress={() => {
                        const randomValue = this.rolldiebutton(1,12);
                        this.setState ({ d12Result: randomValue })
                      }}
                />
            </View>

            <View style={styles.spacer}></View>

            <View style={styles.item}>
            <View style={styles.resultBox}>
            <Text style={styles.Text}> {this.state.d100Result}</Text>
            </View>

            <View style={styles.spacerTop2}></View>
                <Button raised
                    title=" roll d100"
                    onPress={() => {
                        const randomValue = this.rolldiebutton(0,99);
                        this.setState ({ d100Result: randomValue })
                      }}
                />
            </View>
             
        </View>

        <View style={styles.spacerTop}></View>

        <View style={styles.itemList}>
            <View style={styles.item}>
            <View style={styles.resultBox}>
                <Text style={styles.Text}> {this.state.d20Result}</Text>
            </View>

            <View style={styles.spacerTop2}></View>
                <Button raised
                    title=" roll d20"
                    onPress={() => {
                        const randomValue = this.rolldiebutton(1,20);
                        this.setState ({ d20Result: randomValue })
                      }}
                />
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
  spacer:{
    width: 40,
  },
  spacerTop:{
    height: 70,
  },
  spacerTop2:{
    height: 4,
  },
  diceContainer:{
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemList: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
    item:{
      
      width: 80 ,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      
    },
    Text:{
        
        bottom: 15,
        color: 'white',
        fontSize: 40,
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
        width: 80 ,
        height: 80,
        borderWidth: 2,
        borderColor: 'black',
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



