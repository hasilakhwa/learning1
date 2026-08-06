import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import My from './My';

const HideShowToggle = () => {
  const [status, setstatus] = useState(true);
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'white' }}>HideShowToggle</Text>
      {status ? <My /> : null}
      <Button title='Hide' onPress={() => setstatus(false)} />
      <Button title='Show' onPress={()=> setstatus(true)}  />
      <Button title='toggle' onPress={()=> setstatus(!status)}  />
    </View>
  );
};

export default HideShowToggle;
