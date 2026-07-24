import { View, Text, Button } from 'react-native'
import React from 'react'
// let name = 'Hasnain';

const OnPress = () => {
    let name = 'Hasnain';
    const getName= () => {
      let name = 'Ali';
        console.warn('Name: ', name);
        alert('Name: ' + name);
    };
  return (
    <View>
      <Text style= {{color: 'white', fontSize:30}}>{name}</Text>
      <Button title="press" onPress={getName} />
    </View>
  )
}

export default OnPress;