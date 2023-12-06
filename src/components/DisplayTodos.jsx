import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions/todo";

import "../assets/css/displayTodo.css";
import DisplayCount from "./DisplayCount";

const DisplayTodos = ({ todos, deleteTodo, updateTodo }) => {

  const [editTodo, setEditTodo] = useState({
    title: '',
  })


  const handleEditTodo = (todo) => {
    setEditTodo(todo)
    console.log(editTodo)
  }
  return (
    <div className="display-container">
      <div className="display">
        <h4>All Todos</h4>
        <DisplayCount />
      </div>

      <ul className="todo-items">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="todo-title">{todo.title}</div>
            <div className="buttons">
              <button
                type="button"
                className="btn blue"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={() => handleEditTodo(todo)}

              >
                <i className="fa-solid fa-pencil"></i>
              </button>
              <button className="delete-btn" onClick={(e) => deleteTodo(todo.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
              <input type="text" className="edit-input" value={editTodo.title} onChange={(e) => setEditTodo({...editTodo,title:e.target.value})}/>
             
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={(e) => updateTodo(editTodo, editTodo.id)}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (todo, id) => dispatch(updateTodo(todo, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
