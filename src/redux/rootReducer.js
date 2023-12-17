import { combineReducers } from 'redux';
import { taskReducer } from './tasks/taskReducer';

export const rootReducer = combineReducers({
  taskList: taskReducer,
});
