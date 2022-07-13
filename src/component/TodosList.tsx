import classes from './TodosList.module.css';

const TodosList: React.FC<{text: string, key: string}> = (props) => {
    return <li className={classes.item}>{props.text}</li>
}

export default TodosList