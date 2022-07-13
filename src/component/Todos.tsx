import todo from '../models/todo';
import TodosList from './TodosList';

const Todos: React.FC<{ items: todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => <TodosList key={item.id} text={item.text}/>)}
    </ul>
  );
};

export default Todos;
