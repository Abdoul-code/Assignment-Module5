import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import TodoList from './components/TodoList.js'
import AddTodos from './components/AddTodos.js'
import './styles.css';

function App(){
    const [todos , setTodos] = useState([])

    function getTodos(){
        axios.get("/Todos")
        .then(res => setTodos(res.data))
        .catch(err => console.log(err))
    }

    function addTodos(newTodos){
        axios.post("/Todos", newTodos)
        .then(res =>{
            setTodos(prevTodos => [...prevTodos , res.data])
        })
        .catch(err => console.log(err))

    }
    function deleteTodos(todoId){
        axios.delete(`/Todos/${todoId}`)
        .then(res => {
            setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId))
        })
        .catch(err => console.log(err))

    }
    function editTodos(updates , todoId){
        axios.put(`/Todos/${todoId}`, updates)
        .then(res => {
            setTodos(prevTodos =>prevTodos.map(todo => todo._id !== todoId ? todo : res.data))
        })
        .catch(err => console.log(err))

    }

    useEffect(()=>{
       getTodos()
    },[])
    return(
        <div className='todos-container'>
            <AddTodos  
            submit = {addTodos}
            btnText=" Add Todo"
            />

            {todos.map(todo => 
            <TodoList 
            {...todo} 
            key = {todo.name}
            deleteTodos = {deleteTodos}
            editTodos = {editTodos}
            />
            )
            }
        </div>
    )
}

export default App