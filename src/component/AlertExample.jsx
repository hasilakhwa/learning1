import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const AlertExample = () => {
const showPopup = () => {
    Alert.alert(
        'Alert title',
        'Alert Message',
        [
            {
                text : 'Cancel',
                onPress : () => console.log('Cancel'),
                style:'cancel'
            },
            {
                text : 'Ok',
                onPress: () => console.log('Ok',)
            }
        ],

        {cancelable : false}
    )
}
  return (
    <View>
      <Text style={{color:'white', fontSize:30}}>AlertExample</Text>
      <Button title='press me ' onPress={showPopup} />
    </View>
  )
}

export default AlertExample