import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SecondClassComponent from './SecondClassComponent'

class ClassComponent extends Component {
    render() {
      const age = 22;
    return( 
    <View style={{flex:1, backgroundColor:'red'}}>
        <Text style={{fontSize:30,color:'white'}}>Class Component</Text>
        <SecondClassComponent data = {age} />
    </View>
    );
  }
}
export default ClassComponent;
