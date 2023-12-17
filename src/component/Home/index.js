import React, { useRef, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './index.css';

export default function Home() {
  const [mode, setMode] = useState('add');
  const defaultRadioRef = useRef();

  useEffect(() => {
    defaultRadioRef.current.click();
  }, []);

  const handleChangeMode = (event) => {
    setMode(event.target.value);
  };

  return (
    <>
      <section className="navbar-section nav-border">
        <Navbar expand="lg" className=" navbar-section ">
          <Container>
            <Navbar.Brand className="text-white " id="title">
              Task Manager
            </Navbar.Brand>
          </Container>
        </Navbar>
        {/* </div> */}
      </section>
      <section className="form-section">
        <Container>
          <div className="d-flex justify-content-center ">
            <div className="mode-div">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="add"
                ref={defaultRadioRef}
                onChange={handleChangeMode}
              />
              <label className="form-check-label label-text" htmlFor="flexRadioDefault1">
                Add Task
              </label>
            </div>
            <div className="mode-div">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="view"
                onChange={handleChangeMode}
              />
              <label className="form-check-label label-text" htmlFor="flexRadioDefault2">
                View Task List
              </label>
            </div>
          </div>
          {mode === 'add' ? <AddTask /> : <TaskList />}
        </Container>
      </section>
    </>
  );
}
