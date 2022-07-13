const TodosList: React.FC<{text: string, key: string}> = (props) => {
    return <li>{props.text}</li>
}

export default TodosList