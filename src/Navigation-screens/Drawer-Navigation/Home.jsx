import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Home</Text>
      <Button title='Open Drawer' onPress={()=> navigation.openDrawer()} />
    </View>
  )
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


export default Home