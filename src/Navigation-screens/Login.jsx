import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation}) => {
    const [username, setUserName] = useState('')
  return (
    <View>
      
      <TextInput
      placeholder='Enter user name....'
      placeholderTextColor='#adacac'
      onChangeText={setUserName}
      style={{color:'black'}}

      />
      {/* <Button title='Login'  onPress={() => navigation.navigate('About', {username : "Hasnain", age : 22})} />  */}
      <Button title='Login'  onPress={() => navigation.navigate('About', {username: username})} /> 
    </View>
  )
}

export default Login