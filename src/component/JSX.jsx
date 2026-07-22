import { View, Text } from 'react-native'
import React from 'react'
let age = 18;
const add = (a,b) =>{
    return a+b;
};
const JSX = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'white' }}>JSX</Text>
      <Text style={{ fontSize: 30, color: 'white' }}>{age}</Text>
      <Text style={{ fontSize: 30, color: 'white' }}>{add(4,5)}</Text>
    </View>
  );
}

export default JSX