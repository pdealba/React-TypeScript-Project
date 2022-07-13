import todo from '../models/todo';
import TodosList from './TodosList';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: todo[] }> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => <TodosList key={item.id} text={item.text}/>)}
    </ul>
  );
};

export default Todos;
