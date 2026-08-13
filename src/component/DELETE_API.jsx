import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const DELETE_API = () => {
    const [id, setId] = useState()
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://192.168.1.113:3000/users/${id}`);
            Alert.alert('Sucess', 'Message deleted sucessfully')
            console.log(response.data)
        } catch (error) {
            Alert.alert('error', 'failed to delete data')
        }
    }
  return (
    <View>
      <Text style={{color:'white', marginBottom:10, textAlign:'center', fontSize:30}}>DELETE_API</Text>
      <TextInput
      placeholder='Enter ID'
      keyboardType='number-pad'
      value={id}
      onChangeText={(value) => setId(value)}
      style={{color:'white'}}
      />
      <Button title='Delete' onPress={handleDelete} />

    </View>
  )
}

export default DELETE_API