import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PUT_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
   const handleUpdate = async () => {
     try {
       const response = await axios.patch(
         `http://192.168.1.113:3000/users/${formData.id}`,
         {
           ...(formData.name && { name: formData.name }),
           ...(formData.email && { email: formData.email }),
         },
       );
       Alert.alert('Success', 'Data updated Successfully');
       console.log(response.data);
       setFormData({ id: '', name: '', email: '' });
     } catch (error) {
       Alert.alert('Error', 'Failed to update data');
     }
   };
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          marginBottom: 10,
          color: 'white',
        }}
      >
        PUT_API
      </Text>
      <TextInput
        style={{ color: 'white' }}
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={value => handleInput('id', value)}
        keyboardType="number-pad"
      />
      <TextInput
        style={{ color: 'white' }}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        style={{ color: 'white' }}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={value => handleInput('email', value)}
        keyboardType="email-address"
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default PUT_API;
