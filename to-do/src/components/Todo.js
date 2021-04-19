const Todo = ({text, todo, todos, setTodos}) => {

    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
            })
        )
    };

    return ( 

        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`} >{text}</li>
            <button className='complete-btn' onClick={completeHandler}>
                <li className='fas fa-check'></li>
            </button>

            <button className='trash-btn' onClick={deleteHandler}>
                <li className='fas fa-trash'></li>
            </button>
        </div>
     );
}
 
export default Todo;