import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// CLASS FOR THE ORDER LIST, ALSO PLANNED TO BE USED AS A NOTE LIST/ INVENTORY
export default class Note extends React.Component {
  render() {
    return (

      <View key={this.props.keyval} style={styles.note}>
        
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>-</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  note:{
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText:{
    paddingLeft: 10,
    borderLeftWidth: 10,
    borderRadius: 10,
    borderLeftColor: '#ffffff',
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1565c0',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 15,
    borderRadius: 5,
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    width: 30,
  },
  noteDeleteText:{
    color: 'white',
  },
});


