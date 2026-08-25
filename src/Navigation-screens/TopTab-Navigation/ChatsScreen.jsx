import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChatsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f2f5',
    },
    text:{
        fontSize:20,
    }
})

export default ChatsScreen