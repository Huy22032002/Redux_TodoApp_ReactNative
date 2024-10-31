// screens/Screen3.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';

const Screen3 = ({ navigation }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TODO_ASYNC', payload: task });
      setTask('');
      navigation.goBack();
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

export default Screen3;
