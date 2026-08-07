import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const StyleWithButton = () => {
  return (
    <View>
      <Button title="Basic Button" color={'red'} />
      {/* 0.2 is by default active opasity to increase the opacity assign value < 0.2 and to decreae opasity assign value > 0.2 */}
      <TouchableOpacity style={styles.Button} activeOpacity={0.8}>
        <Text style={styles.ButtonText}> Touchable Opasity </Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={styles.Button}
        underlayColor='#004603'
        onPress={() => {
          alert('Helo');
        }}
      >
        <Text style={styles.ButtonText}> Touchable higlight</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
    Button:{
        backgroundColor: '#00ff0d',
        margin: 20,
        padding:20,
        borderRadius:25,
        elevation:5,
    },
    ButtonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    }
})
export default StyleWithButton