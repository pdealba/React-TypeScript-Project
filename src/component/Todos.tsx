import todo from '../models/todo';
import TodosList from './TodosList';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: todo[], onRemoveList: (id: string) => void }> = (props) => {
  
  return (
    <ul className={classes.list}>
      {props.items.map((item) => <TodosList onRemoveList={props.onRemoveList.bind(null, item.id)} key={item.id} text={item.text}/>)}
    </ul>
  );
};

export default Todos;
