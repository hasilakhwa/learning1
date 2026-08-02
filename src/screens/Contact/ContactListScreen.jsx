import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {contact} from './Contactinfo'
import ContactItem from '../../component/ContactItem'
import {styles} from './style'

const ContactListScreen = () => {
    const renderItem = ({item}) => (
        <ContactItem
         name = {item.name}
         email = {item.email}
         ph = {item.ph}
         address={item.address}
         />
    );
  return (
    <FlatList 
    data={contact}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    ListHeaderComponent={<Text style={styles.heading}>Contacts</Text>}
    contentContainerStyle={styles.list}
    />
  )
}

export default ContactListScreen