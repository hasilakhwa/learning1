import { View, Text, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const InputText = () => {
    const [username, setUserName] = useState('')
  return (
    <View>
      <Text style = {{fontSize:50, color: 'white'}}>InputText</Text>
      <Text style = {{fontSize:50, color: 'white'}}>UserName: {username}</Text>
      <TextInput style = {{color: 'white', borderWidth: 2, borderColor: 'gray', margin:4}} placeholder='Enter your text......' value={username} onChangeText={(value) => setUserName(value) } />
        <Button title='clear' onPress={()=> setUserName('')} />
    </View>
  )
}

export default InputText