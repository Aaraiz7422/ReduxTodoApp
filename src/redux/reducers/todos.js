import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from '../types';

const initialState = {
  tasks: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {id: Date.now(), text: action.payload, completed: false},
        ],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? {...task, completed: true} : task,
        ),
      };
    default:
      return state;
  }
};
