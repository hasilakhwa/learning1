import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const POST_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });
  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.113:3000/users',
        formData,
      );
      console.log(response.data)
      Alert.alert('Success', 'Data posted successfully');
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Sorry faild to Post');
    }
  };
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        POST_API
      </Text>
      <TextInput
        style={{ color: 'white' }}
        placeholder="Enter Id"
        value={formData.id}
        onChangeText={value => handleInput('id', value)}
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
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default POST_API;
