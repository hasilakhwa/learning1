import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    const [name, setName] = useState('Hasnain');
    const updateName = () =>{
        setName('Ali');
    };
   
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 50 }}>UseStateHook</Text>
      <Text style={{ color: 'white', fontSize: 50 }}>{name}</Text>
      {/* <Button title='Press' onPress={()=> setName('Ali')} /> */}
      {/* This is not recommended */}
      <Button title='Press' onPress={updateName} />
    </View>
  );
}

export default UseStateHook