import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/slice/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <View>
      <Text style={{ fontSize: 30, color:'white' }}>Counter: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Button title='Decrement' onPress={() => dispatch(decrement())} />
      <Button title='Reset' onPress={() => dispatch(reset())} />
    </View>
  )
}

export default Counter