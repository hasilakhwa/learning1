import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'

const UseRefHook = () => {
    const myRef = useRef()
    const handleRef = () => (
        // myRef.current.setNativeProps({
        //     text : 'Hasnain',
        //     style : {backgroundColor:'crimson' ,  color: 'white'}
        // })
        myRef.current.focus()
    )

  return (
    <View style={styles.container}>
      <TextInput
      ref={myRef}
      placeholder='Enter your Name...'
      placeholderTextColor={'#999'}
      style={styles.input}
    //   keyboardType='email-address'
      />
      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f0f0',
        padding:20,
    },
    input:{
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:10,
        paddingHorizontal:15,
        fontSize:18,
        borderWidth:1,
        borderColor:'#ccc',
        marginBottom:20,

    },
    button:{
        width:'100%',
        height:50,
        backgroundColor:'#007bff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },

})
export default UseRefHook