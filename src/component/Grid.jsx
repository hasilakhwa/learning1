import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
const data = [
    {id: 1, title: 'Item1'},
    {id: 2, title: 'Item2'},
    {id: 3, title: 'Item3'},
    {id: 4, title: 'Item4'},
    {id: 5, title: 'Item5'},
    {id: 6, title: 'Item6'},
    {id: 7, title: 'Item7'},
    {id: 8, title: 'Item8'},
    {id: 9, title: 'Item9'},
    {id: 10, title: 'Item10'},
    {id: 11, title: 'Item11'},
    {id: 12, title: 'Item12'},
    {id: 13, title: 'Item13'},
    {id: 14, title: 'Item14'},
    {id: 15, title: 'Item15'},
    {id: 16, title: 'Item16'},
    {id: 17, title: 'Item17'},
    {id: 18, title: 'Item18'},
    {id: 19, title: 'Item19'},
    {id: 20, title: 'Item20'}
]
const Grid = () => {
    
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.griditem}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heading: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  griditem: {
    backgroundColor: '#ff6f61',
    padding: 20,
    marginBottom: 10,
    width: '48%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default Grid