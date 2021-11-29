import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import Header from "./components/Header/Header";
import s from "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo, toggleComplete } from "./Redux/actions";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const tasks = useSelector((store) => store.todos.todo);
  const filter = useSelector((store) => store.todos.filter);
  const dispatch = useDispatch();

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    dispatch(addTodo(newTask));
  }

  function toggleTaskCompleted(id) {
    dispatch(toggleComplete(id));
  }

  function deleteTask(id) {
    dispatch(deleteTodo(id));
  }

  function editTask(id, newName) {
    dispatch(editTodo(id, newName));
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <Router>
      <div>
        <Switch>
          <div className="todoapp stack-large">
            <div className={s.todohelper}>
              <h1>Todo Helper</h1>
            </div>
            <Header />
            <Route path="/create">
              <Form addTask={addTask} />
            </Route>
            <Route path="/myTasks">
              <div className="filters btn-group stack-exception">
                {filterList}
              </div>
              <h2 id="list-heading">{headingText}</h2>
              <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
              >
                {taskList}
              </ul>
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
