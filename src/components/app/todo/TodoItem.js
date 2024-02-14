import React from 'react';
import {View, Text, Button} from 'react-native';

export const TaskItem = ({task, onComplete, onRemove}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
      <Text
        style={{
          flex: 1,
          textDecorationLine: task.completed ? 'line-through' : 'none',
        }}>
        {task.text}
      </Text>
      {!task.completed && (
        <Button title="Complete" onPress={() => onComplete(task.id)} />
      )}
      <Button title="Remove" onPress={() => onRemove(task.id)} />
    </View>
  );
};
