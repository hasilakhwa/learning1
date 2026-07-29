import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'
const grosery = [
    {
    title: 'Fruits: ',
    data:[
        {id:1 , name: 'Mango'},
        {id:2 , name: 'Apple'},
        {id:3 , name: 'Grape'},
    ],
},
    {
    title: 'Vegtables: ',
    data:[
        {id:4 , name: 'Potato'},
        {id:5 , name: 'Onion'},
        {id:6 , name: 'carrot'},
    ],
},
    {
    title: 'Spices: ',
    data:[
        {id:7 , name: 'Red papper'},
        {id:8 , name: 'Black papper'},
        {id:9 , name: 'Salt'},
    ],
},

]
const SectionListScreen = () => {
    const renderitem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
    const renderSectionHeader = ({section}) => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{section.title}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
      <SectionList
       sections={grosery} 
       renderItem={renderitem}
       renderSectionHeader={renderSectionHeader}
       />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#97a097be',
  },

  item: {
    backgroundColor: '#3174ac',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  header: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif, serif',
  },
});

export default SectionListScreen