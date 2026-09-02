import { View, Text, Button } from 'react-native'
import React from 'react'
import {useStoreCounter} from '../zustand/store'

const Two = () => {
    const {count, increment, decrement} = useStoreCounter()
  return (
    <View>
      <Text style={{ color: '#f0f0f0', fontSize: 30 }}>Counter: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
}

export default Two