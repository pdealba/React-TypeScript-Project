import React, { useState } from "react";

import todo from "../models/todo";

type todosType = {
  items: todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<todosType>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== todoId));
  };

  const contextValue: todosType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodoContextProvider