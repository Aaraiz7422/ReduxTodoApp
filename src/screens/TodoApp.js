import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TaskList} from '../components/app/todo/TodoList';
import {addTask, removeTask, completeTask} from '../redux/actions/todos';

export const TodoAppContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todoReducer.tasks);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleRemoveTask = taskId => {
    dispatch(removeTask(taskId));
  };

  const handleCompleteTask = taskId => {
    dispatch(completeTask(taskId));
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <TextInput
        style={{
          marginBottom: 10,
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Add a new task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <TaskList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onRemoveTask={handleRemoveTask}
      />
    </View>
  );
};
