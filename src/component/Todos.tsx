import { useContext } from 'react';

import TodosList from './TodosList';
import classes from './Todos.module.css';
import {TodosContext} from '../store/todos-context';

const Todos: React.FC = () => {

  const todoCtx = useContext(TodosContext);
  
  return (
    <ul className={classes.list}>
      {todoCtx.items.map((item) => <TodosList onRemoveList={todoCtx.removeTodo.bind(null, item.id)} key={item.id} text={item.text}/>)}
    </ul>
  );
};

export default Todos;
