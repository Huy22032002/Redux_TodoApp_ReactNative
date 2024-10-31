import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Screen2 = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const { name } = route.params;

  const removeTask = (index) => {
    dispatch({ type: 'REMOVE_TODO_ASYNC', payload: index });
  };

  const editTask = (index, task) => {
    navigation.navigate('Screen3', { index, task });
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#F5A434',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30, margin: 20 }}
          source={require('./T1_Faker_Worlds_2024.jpg')}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'right' }}>
          Hi {name}
        </Text>
      </View>

      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          paddingHorizontal: 20,
          fontSize: 20,
          color: '#251A5B',
          marginBottom: 20,
        }}
        placeholder="Search"
        placeholderTextColor="#251A5B"
      />

      <FlatList
        style={{ margin: 20 }}
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: 330,
              height: 60,
              backgroundColor: '#5BA468',
              borderRadius: 50,
              marginTop: 15,
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('./v.png')}
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ fontSize: 20, color: 'white', flex: 1, marginLeft: 10 }}>
              {item}
            </Text>
            <TouchableOpacity onPress={() => editTask(index, item)}>
              <Image
                source={require('./update.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={{ color: 'red', marginLeft: 10 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#251A5B',
          paddingVertical: 15,
          paddingHorizontal: 50,
          borderRadius: 25,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Screen3')}>
        <Text style={{ color: 'white', fontSize: 18 }}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
