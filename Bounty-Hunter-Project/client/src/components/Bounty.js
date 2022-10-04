import React,{useState} from 'react'
import AddBountyForm from './AddBountyForm'

function Bounty(props){
    const {firstName, lastName, living, bountyAmount, type, _id } = props

    const [editToggle , setEditToggle] = useState(false)
    return(
        <div className='bounty'>
         { !editToggle ?
         <>
            <h1>Fist_name:{firstName}</h1>
            <h1>Last_name:{lastName}</h1>
            <h3>Living:{living}</h3>
            <h3>Bounty Number:{bountyAmount}</h3>
            <h3>Type:{type}</h3>
            <button className='delete-btn'
            onClick={() => props.deleteBounties(_id)}>Delete
            </button>
            <button className='edit-btn' onClick={()=>setEditToggle(prevToggle => !prevToggle)}> 
                Edit
            </button >
         </>
        :
        <>
        <AddBountyForm 
        firstName = {firstName}
        lastName = {lastName}
        _id = {_id}
        living = {living}
        bountyAmount = {bountyAmount}
        type={type}
        btnText = "Submit Edit"
        submit = {props.editBounties}
        />
        <button onClick={()=>setEditToggle(prevToggle => !prevToggle)}
        > Close </button>
        </>
         }
        </div>
    )
}
export default Bounty