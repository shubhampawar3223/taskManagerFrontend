import { TASK_ADD, TASK_UPDATE, TASK_DELETE } from './taskActionType';

export const taskAdd = (taskDetail) => {
  return {
    type: TASK_ADD,
    payload: taskDetail,
  };
};

export const taskUpdate = (updatedDetail) => {
  return {
    type: TASK_UPDATE,
    payload: updatedDetail,
  };
};

export const taskDelete = (taskId) => {
  return {
    type: TASK_DELETE,
    payload: taskId,
  };
};
