import { useEffect, useState } from 'react';
import './App.css';


// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // const [state, setstate] = useState(initialState)
  // state => actual value  /// stestate =>function that can change the state value
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when app start
  useEffect(() => {
    getLocalTodos();
},[]);

  // Use Effect
  useEffect (() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;

        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;

        default:
          setFilteredTodos(todos);
          break
    }
  };

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
      <h1>To Do App</h1>
      </header> 

      <Form 
      inputText={inputText}
      todos={todos} 
      setInputText={setInputText}
      setTodos={setTodos}
      setStatus={setStatus}
      />

      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>

    </div>
  );
}

export default App;
