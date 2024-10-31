// screens/Screen1.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image,} from 'react-native';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#5BA468',
        justifyContent:'center'
      }}>
      <View style={{flex:3, margin:50}}>
        <Image source={require('./banner.png')} style={{width:250, height:250}}/>
      </View>
      <View style={{flex:2}}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign:'center', color:'#F5A434' }}>
        MANAGE YOUR {'\n'} TASK
      </Text>
      </View>
      <View style={{flex:1, width:'90%'}}> 
      <TextInput
        placeholder="Enter your name"
        value={name} color="white" placeholderTextColor="white"
        onChangeText={setName}
        style={{
          padding: 20,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: 'white',
          fontSize: 16,
          height: 40,
          width: '100%'
        }}
      />
      </View >
      <View style={{flex:3}}>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Screen2', { name })}
      />
      </View>
    </View>
  );
};

export default Screen1;
