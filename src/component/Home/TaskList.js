import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, taskDelete } from '../../redux/index';

function TaskList(props) {
  useEffect(() => {}, []);

  const confirmDeleteTask = (task) => {
    let permissionTodelete = window.confirm(`Do you really want to delete the '${task.title}' task.`);
    if (permissionTodelete) {
      props.taskDelete(task.id);
    }
  };

  const confirmEditTaskStatus = (task) => {
    let permissionToUpdate = window.confirm(
      `Do you really want to change status of the task to 'Completed' for '${task.title}' task.`,
    );
    if (permissionToUpdate) {
      task.status = 'Completed';
      props.taskUpdate(task);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="col-10  table-responsive">
          <table className="table table-design text-font">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Task Title</th>
                <th scope="col">Description</th>
                <th scope="col">Due Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.tasks.length
                ? props.tasks.map((task, i) => {
                    return (
                      <tr key={`${task.title}${i}`}>
                        <td scope="row">{i + 1}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.status}</td>
                        <td>
                          {' '}
                          <button className="btn btn-sm btn-success" onClick={() => confirmEditTaskStatus(task)}>
                            Edit Status
                          </button>{' '}
                          <button className="btn btn-sm btn-danger" onClick={() => confirmDeleteTask(task)}>
                            Delete
                          </button>{' '}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
          {!props.tasks.length && <p className="text-center text-white">Empty task list.</p>}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskList.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskUpdate: (taskDetails) => dispatch(taskUpdate(taskDetails)),
    taskDelete: (taskId) => dispatch(taskDelete(taskId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
