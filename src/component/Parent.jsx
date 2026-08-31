import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'

// Create, Provide, Use

export const CreateContext = createContext()
const Parent = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count +1)
    }
  return (
    <CreateContext.Provider value={{count, incrementCount, setCount}}>
   
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <FirstChild />
      </View>
    </CreateContext.Provider>
  );
}

export default Parent