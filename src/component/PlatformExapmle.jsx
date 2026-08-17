import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const PlatformExapmle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        {Platform.OS === 'ios' ? 'Welcome IOS user' : 'Welcome Android user'}
      </Text>
      <Text style={styles.platformText}>
        {Platform.select({
          ios: 'you are using IOS device',
          android: 'you are using Android device',
          windows: 'you are using Windows device',
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      android: 'lightgreen',
      ios: 'lightblue',
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: Platform.OS === 'macos' ? '#f09876' : 'green',
    fontSize: 22,
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationStyle: 'dotted',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  platformText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PlatformExapmle;
