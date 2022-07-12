const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bountyAgent.js')



    bountyRouter.route("/")
    .get((req,res,next)=>{
       Bounty.find((err,bountiesAgent)=>{
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(200).send(bountiesAgent)

       })
    })

    .post((req,res,next)=>{
        const newBounty = new Bounty(req.body)
        newBounty.save((err,savedBounty)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedBounty)
        })
       
    })
//Delete one
    bountyRouter.delete("/:bountyId",(req,res,next)=>{
     Bounty.findOneAndDelete(
        {_id:req.params.bountyId},
        (err,deleteBounty)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succefully deleted ${deleteBounty.firstName} from the database`)
        }
        )
   
    })
//Update one 
bountyRouter.put("/:bountyId",(req,res,next)=>{
Bounty.findOneAndUpdate(
    {_id: req.params.bountyId},
    req.body,
    {new:true},
    (err,updateBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updateBounty)
    })
})




module.exports = bountyRouter