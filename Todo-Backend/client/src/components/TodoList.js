import React,{useState} from 'react'
import AddTodos from './AddTodos.js'

function TodoList(props){
    const{name, description,completed,_id} = props
    const [editToggle , setEditToggle] = useState(false)
    return(
        <div className='Todos'>
            { !editToggle ?
            <>
                <h1>Name:{name}</h1>
                <h1>Description:{description}</h1>
                <p>Completed{completed}</p>
                <button className='delete-btn'
                 onClick={()=> props.deleteTodos(_id)}>
                Delete
                </button>
                <button className='edit-btn' onClick={()=>setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
            :
            <>
                <AddTodos
                name={name}
                description= {description}
                _id = {_id}
                btnText = "Submit Edit"
                submit={props.editTodos}
                />
                <button onClick={()=>setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
               </>
               }
        </div>
    )
}

export default TodoList