import { View, Text, Button } from 'react-native';
import React, {useState} from 'react';
import Child from './Child'; 

const Props = () => {
    const [count, setCount] = useState(0);
    // const updateCount = () => {
    //     setCount(count + 1)
    // }
  return (
    <View>
      <Text style = {{color:'white', fontSize: 50}}>Props</Text>
      <Button title='counter' onPress={() => setCount(count + 1)} />
      {/* <Button title='counter' onPress={updateCount} /> */}
      <Child counter={count} />
    </View>
  )
}

export default Props;