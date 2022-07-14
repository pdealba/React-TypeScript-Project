import classes from './TodosList.module.css';

const TodosList: React.FC<{text: string, onRemoveList: () => void}> = (props) => {
    return <li onClick={props.onRemoveList} className={classes.item}>{props.text}</li>
}

export default TodosList