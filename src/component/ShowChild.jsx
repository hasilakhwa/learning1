import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChild = () => {
    useEffect(() => {
        return ()=>{
            alert('unmounted phase');
        }  
    }, [])
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 30 }}>Child Component</Text>
    </View>
  );
}

export default ShowChild