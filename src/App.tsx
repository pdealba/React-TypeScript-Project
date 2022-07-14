import { useState } from "react";
import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeListHandler = (todoId: string) => {
    setTodos(prevState => prevState.filter(item => item.id !== todoId))
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveList={removeListHandler}/>
    </div>
  );
}

export default App;
