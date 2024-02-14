import React from 'react';
import {FlatList} from 'react-native';
import {TaskItem} from './TodoItem';

export const TaskList = ({tasks, onCompleteTask, onRemoveTask}) => {
  return (
    <FlatList
      style={{marginTop: 20}}
      data={tasks}
      keyExtractor={item => item.id.toString()}
      keyboardShouldPersistTaps="handled"
      renderItem={({item}) => (
        <TaskItem
          task={item}
          onComplete={onCompleteTask}
          onRemove={onRemoveTask}
        />
      )}
    />
  );
};
