import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressableComponent = () => {
  const handlePress = () => {
    alert('On Press');
  };
  const handlePressIn = () => {
    alert('On Press In');
  };
  const handlePressOut = () => {
    alert('On Press Out');
  };
  const handlePressLong = () => {
    alert('On Press Long');
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.Button}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handlePressLong}
        delayLongPress={5000}
      >
        <Text style={styles.ButtonText}> Press Me </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  Button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default PressableComponent;
