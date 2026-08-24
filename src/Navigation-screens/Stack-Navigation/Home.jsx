import { View, Text, Button } from 'react-native'
import React from 'react'


const home = ({ navigation }) => {
  return (
    <View>
      <Text>home</Text>
      <Button title='Go to About page' onPress={() => navigation.navigate('About')} />
    </View>
  )
}

export default home