import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        alert('Email: ' + email);
        alert('Password: ' + password);
        setEmail(' ');
        setPassword(' ');
    }
  return (
    <View style={styles.conatiner}>
      <Text style={styles.heading}>LoginForm</Text>
      <TextInput
        style={styles.Input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="gray"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.Input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="gray"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.Button} onPress={handleLogin}>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={() => {setEmail(''); setPassword('')}}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    conatiner:{
        justifyContent:'center',
        backgroundColor:'#f0f0f0',
        paddingHorizontal:20,
        paddingVertical:40,
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:30,
        textAlign:'center',
        color:'#333',

    },
    Input:{
        height:50,
        bordercolor:'#ccc',
        borderRadius:10,
        marginBottom:20,
        paddingHorizontal:15,
        borderWidth:1,
        backgroundColor:'#fff',
        fontSize:16,
        color:'#222020'
    },
    Button:{
        alignItems:'center',
        backgroundColor:'#1919c0d7',
        height:30,
        paddingVertical:5,
        borderRadius:10
    },
    ButtonText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    },
    clearButton:{
        alignItems:'center',
        backgroundColor:'#1919c0d7',
        height:30,
        paddingVertical:5,
        borderRadius:10,
        marginTop:10},
    clearButtonText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }
})
export default LoginForm