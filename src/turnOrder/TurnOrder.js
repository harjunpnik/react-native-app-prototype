import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Note from './Note.js';

export default class TurnOrder extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }


  static navigationOptions = {
    // header to null so we can use our own header/topBar
    header: null,
  };

  render() {
    
    //Maps the noteArray
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={ ()=> this.deleteNote(key)} />
    });
    
    return (
      <View style={styles.container}>

        {/*TOP BAR*/}
        <View style={styles.header}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.backTouchable} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>    
            <Image style={styles.backArrow} source={require('../imgs/backArrow.png')}/>
          </TouchableOpacity>
          <Text style={styles.headerText}> Turn Order </Text>

        </View>

        {/*MAIN CONTENT*/}
        <View style={styles.top}>

          <TextInput onChangeText={(noteText) => this.setState({noteText}) } value={this.state.noteText} style={styles.textInput} placeholder= "> Name" placeholderTextColor="white" underlineColorAndroid="transparent"></TextInput>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>

          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>

        </View>

        <View style={styles.top}></View>

      </View>
    );
  }

  //Adds Note / person to the list
  addNote(){
    if (this.state.noteText )  {
      this.state.noteArray.push({
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray});
      this.setState({ noteText: ''});

    }
  }

  //Deletes Note / person from order
  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
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
  scrollContainer:{
    flex: 1,
    marginBottom: 10,
  },
  top:{
    position: 'absolute',
    top: 82,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    height: 72,
  },
  addButton:{
    position: 'absolute',
    zIndex: 11,
    right: 10,
    top: 4,
    backgroundColor: '#1565c0',
    width: 60,
    height: 64,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText:{
    color: '#fff',
    fontSize: 24,
  },
});


