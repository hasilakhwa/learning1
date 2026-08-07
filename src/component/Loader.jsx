import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [Loading, setLoading] = useState(false)
    const toggleLoader = () => {
        setLoading(!Loading)
    }
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size={'large'} color={'#4CAF50'} /> */}
      <TouchableOpacity style={styles.button} onPress={toggleLoader}>
        <Text style={styles.ButtonText}> {Loading ? 'HideLoader' : 'ShowLoader'} </Text>
      </TouchableOpacity>
      {Loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={'#4CAF50'} />
          <Text style={styles.loadingText}> Loading.... </Text>
        </View>
      )}
    </View>
  );
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    marginBottom: 20,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  loaderContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
});