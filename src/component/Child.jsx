import { View, Text } from 'react-native'
import React from 'react'
import Props from './Props'

const Child = (Props) => {
    let counter = Props.counter
  return (
    <View>
      {/* <Text style = {{color: 'white'}}>Child</Text> */}
      <Text style = {{color: 'white' } }>{counter}</Text>
      
    </View>
  )
}

export default Child