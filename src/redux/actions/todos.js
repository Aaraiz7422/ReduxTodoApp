import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from '../types';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const completeTask = taskId => ({
  type: COMPLETE_TASK,
  payload: taskId,
});
