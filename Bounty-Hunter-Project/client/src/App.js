import React,{useState , useEffect} from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBountyForm from './components/AddBountyForm.js'
import './styles.css';

function App(){
    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get("/bounties")
        .then(res =>setBounties(res.data) )
        .catch(err => console.log(err))
    }

    function addBounties(newBounty){
        axios.post("/bounties", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties , res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounties(bountyId){
        axios.delete(`/bounties/${bountyId}`)
        .then(res => {
            setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        })
        .catch(err => console.log(err))
    }

    function editBounties(updates , bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))

    }

    useEffect(()=>{
        getBounties()

    },[])
    return(
        <div>
                <AddBountyForm 
                submit = {addBounties}
                btnText = "Add Bounty"
                />
                <div className='bounty-container'>
                {bounties.map(bounty => 
                <Bounty 
                {...bounty} 
                key={bounty.firstName}
                deleteBounties = {deleteBounties}
                editBounties = {editBounties}
                /> )}
                </div>
        </div>
    )
}

export default App