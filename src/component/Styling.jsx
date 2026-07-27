import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import style from '../style/style'

const Styling = () => {
  return (
    <View>
      <Text style={{color:'white', backgroundColor: 'red', fontSize:30, marginVertical:10, padding:10, borderWidth:3, borderColor:'white'}} > InlineStyling</Text>

      <Text style={Style.text}> Internal Styling</Text>
      
      <Text style={style.text} > External Styling</Text>
    </View>
  )
}
const Style = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    marginVertical: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: 'blue',
  },
});

export default Styling