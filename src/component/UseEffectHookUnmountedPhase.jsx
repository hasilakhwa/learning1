import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import ShowChild from './ShowChild';
const UseEffectHookUnmountedPhase = () => {
  const [showChild, setShowChild] = useState(true);
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 30 }}>Parent Component</Text>
      {showChild ? <ShowChild /> : null}
      <Button title='toggle' onPress={() => setShowChild(!showChild)} />
    </View>
  );
};

export default UseEffectHookUnmountedPhase;
