import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { taskAdd } from '../../redux/index';
import './index.css';

function AddTask(props) {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  useEffect(() => {}, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!title || !title.length) {
      alert('Title of the task is required.');
      return;
    }

    if (!description || !description.length) {
      alert('Description of the task is required.');
      return;
    }

    if (!dueDate) {
      alert('Due date of the task is required.');
      return;
    }

    if(new Date(dueDate) < new Date()){
      alert('Invalid date for the task.');
      return;
    }

    let newTask = {
      id: props.tasks.length + 1,
      title,
      description,
      dueDate,
      status: 'Pending',
    };
    props.taskAdd(newTask);
    titleRef.current.value = null;
    descriptionRef.current.value = null;
    dueDateRef.current.value = null;
    setTitle(null);
    setDescription(null);
    setDueDate(null);

    alert("Task is successfully added. Please track it from 'View Task List' section.");
  };

  return (
    <div className="d-flex justify-content-center form-container">
      <div className="col-sm-10 col-md-8 col-lg-6  form-design text-font">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              ref={titleRef}
              placeholder="eg. Wake up at 6AM."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={4}
              ref={descriptionRef}
              placeholder="eg. For meeting preperation."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" ref={dueDateRef} onChange={(e) => setDueDate(e.target.value)} />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" onClick={handleSubmitForm}>
              Add Task
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskList.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskAdd: (taskDetails) => dispatch(taskAdd(taskDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
