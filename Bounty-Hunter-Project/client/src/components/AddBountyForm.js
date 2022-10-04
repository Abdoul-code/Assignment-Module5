import React,{useState} from 'react'

function AddBountyForm (props){
    const initInputs = {firstName:props.firstName || " ", lastName:props.lastName || " ", living:props.living || " ", bountyAmount: props.bountyAmount || " ", type: props.type || ""}
    const[editAgent, setEditAgent] = useState(initInputs)

    function handleChange(e){
        const {name , value} = e.target
        setEditAgent(prevAgent => ({...prevAgent , [name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(editAgent, props._id)
        setEditAgent(initInputs)
    }


    return(
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text"
                name="firstName"
                value={editAgent.firstName}
                onChange={handleChange}
                placeholder="First_Name"
                className='input'
                
            />
             <input 
                type="text"
                name="lastName"
                value={editAgent.lastName}
                onChange={handleChange}
                placeholder="Last_Name"
                className='input'
                
                
            />
             <input 
                type="text"
                name="living"
                value={editAgent.living}
                onChange={handleChange}
                placeholder="Living"
                className='input'
               
            />
             <input 
                type="number"
                name="bountyAmount"
                value={editAgent.bountyAmont}
                onChange={handleChange}
                placeholder="Bounty Amount"
                className='input'
                
            />
                  <input 
                type="text"
                name="type"
                value={editAgent.type}
                onChange={handleChange}
                placeholder="Type"
                className='input'
                
            />

            <button className='button'>{props.btnText}</button>

        </form>
    )
}

export default AddBountyForm