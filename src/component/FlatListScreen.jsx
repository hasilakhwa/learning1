import { View, Text, FlatList, StyleSheet } from 'react-native'
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
    {id: 11, title: 'Item11'},
    {id: 12, title: 'Item12'},
    {id: 13, title: 'Item13'},
    {id: 14, title: 'Item14'},
    {id: 15, title: 'Item15'},
    {id: 16, title: 'Item16'},
    {id: 17, title: 'Item17'},
    {id: 18, title: 'Item18'},
    {id: 19, title: 'Item19'},
    {id: 20, title: 'Item20'},
]

const FlatListScreen = () => {
    const renderItem = ({item}) => (
        <View style={style.item}>
            <Text style={style.title}>{item.title}</Text>
        </View>
    );
  return (
    <View style={style.container}>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item=> item.id}
      contentContainerStyle={style.list}
      />
    </View>
  )
}
const style = StyleSheet.create({
  item: {
    backgroundColor: 'skyblue',
    borderWidth: 4,
    borderColor: 'blue',
    marginVertical: 8,
    padding: 20,
    borderRadius: 8,
    shadowColor: '#5e5555',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title:{
    fontSize: 32,
    color: 'white',
  },
  container: {
    paddingTop: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default FlatListScreen