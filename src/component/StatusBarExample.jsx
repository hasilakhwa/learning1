import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View style={styles.conatiner}>
        <StatusBar
        barStyle={'dark-content'}
        hidden={false} //by default value is false
        // backgroundColor={'red'}
        backgroundColor={"rgba(0,0,0,0.2)"}
        translucent={true}
        />
      <Text style={styles.text}>StatusBarExample</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#6200fe',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#fff',
    fontSize:25,
  }
});
export default StatusBarExample