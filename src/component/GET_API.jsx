import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    // fetch('http://192.168.1.113:3000/users').then((response) => {
    //     response.json().then((result) => {
    //         console.log(result);
    //     });
    // });
    axios.get('http://192.168.1.113:3000/users').then(result => {
      // console.log(result.data);
      setMyData(result.data);
    });
  }, []);
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 10 }}>GET API METHOD</Text>
      {myData.map(item => (
        <View key={item.id}>

        <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>
          {item.id}
        </Text>
        <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>
          {item.name}
        </Text>
        <Text style={{ color: 'white', fontSize: 20, marginBottom: 10 }}>
          {item.email}
        </Text>
        
        </View>
      ))}
    </View>
  );
};

export default GET_API;
