import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className="main">
       <h1>
          <i className="fa-solid fa-pencil"></i> TODO APP
        </h1>
        <p>A simple React Redux Todo App</p>
      <div className="container-wrapper">
        <AddTodo />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
