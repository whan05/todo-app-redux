import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./store/slices/todo/todo";
import { useState } from "react";

export const TodoApp = () => {
    const todos = useSelector(state => state.todo)
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodo(todo));
  };

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo.text));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agregar tarea..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <ol>
        {
            todos.map( todo => (
                
                <li 
                    key={todo.text}
                    className={todo.completed === true ? 'toggled' : ""}
                >
                    <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => handleToggleTodo(todo)}
                        />
                     {todo.text}
                    <button
                        onClick={() => handleDeleteTodo(todo)}
                    >Eliminar</button>
                </li>
            ))
        }
      </ol>
    </>
  );
};
