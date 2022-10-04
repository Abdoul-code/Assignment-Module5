import React,{useState} from 'react'
function AddTodos(props){
    const initInputs = {name:props.name ||" ", description: props.description || "", completed: props.completed || ""}
    const [inputs ,setInputs] = useState(initInputs)

    function handleChange(e){
        const {name , value} = e.target
        setInputs(prevInputs => ({...prevInputs , [name]:value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs , props._id)
        setInputs(initInputs)
    }
    return(
        <form onSubmit={handleSubmit} className="form">
            <input 
              type = "text"
              name = "name" 
              value = {inputs.name}
              onChange = {handleChange} 
              placeholder="Name"
              className='input'
              />
            <input 
              type="text"
              name="description" 
              value={inputs.description}
              onChange={handleChange} 
              placeholder="Description"
              className='input'
              />
            
            <button className='button'>{props.btnText}</button>


        </form>
    )
}


export default AddTodos