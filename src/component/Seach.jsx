import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Contacts = [
  { id: 1, name: 'Hasnain' },
  { id: 2, name: 'Rana' },
  { id: 3, name: 'Basit' },
  { id: 4, name: 'Ali' },
  { id: 5, name: 'Hanzala' },
];
const Seach = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = Contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seach</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Contacts..."
        value={searchQuery}
        placeholderTextColor="#888"
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#90caf9',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 20,
  },
  contactItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactName: {
    fontSize: 18,
    color: '#424242',
  },
});

export default Seach;
