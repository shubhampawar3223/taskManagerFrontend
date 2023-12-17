import { TASK_ADD, TASK_UPDATE, TASK_DELETE } from './taskActionType';

const initialState = {
  mode: null,
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TASK_UPDATE:
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? { ...task, ...action.payload } : task)),
      };
    case TASK_DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
