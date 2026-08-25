import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f8f9fa',
  },
  text:{
    fontSize:26,
    fontWeight:'bold',
    color:'#343a40',
  },
})

export default ProfileScreen