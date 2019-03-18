import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import TopBar from '../components/TopBar.js';
import Note from './Note.js';

export default class TurnOrder extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  render() {
    
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={ ()=> this.deleteNote(key)} />
    });
    
    return (
      <View style={styles.container}>

        <TopBar name={'Turn Order'}/>

        <View style={styles.top}>

          <TextInput onChangeText={(noteText) => this.setState({noteText}) } value={this.state.noteText} style={styles.textInput} placeholder= "> Name" placeholderTextColor="white" underlineColorAndroid="transparent">

          </TextInput>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>

          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>
        </View>

        <View style={styles.top}>

          

        </View>

      </View>
    );
  }

  addNote(){
    if (this.state.noteText )  {
      this.state.noteArray.push({
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray});
      this.setState({ noteText: ''});

    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 10,
  },
  top:{
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
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
  }
});


