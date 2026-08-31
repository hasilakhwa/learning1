import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CreateContext } from './Parent'

const SubChild = () => {
    const {count, incrementCount,setCount} = useContext(CreateContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Counter" onPress={incrementCount} />
      <View style={{marginTop:10}}>
        <Button title="clear" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize: 26,
        marginBottom:10,
    }
})

export default SubChild 