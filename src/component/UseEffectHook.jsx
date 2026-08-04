import { View, Text, Button,  } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount] = useState(1)
    useEffect(() => {
        alert('API Calling')
    }, [])
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 30 }}>UseEffectHook</Text>
      <Text style={{ color: 'white', fontSize: 30 }}>Count:  , {count}</Text>
      <Button title='Count' onPress={() => {setCount(count+1)}} />
    </View>
  );
}

export default UseEffectHook