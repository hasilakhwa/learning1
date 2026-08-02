import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../screens/Contact/style'

const ContactItem = ({name,email,ph, address}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.phone}>{ph}</Text>
      <Text style={styles.phone}>{address}</Text>
    </View>
  );
}

export default ContactItem