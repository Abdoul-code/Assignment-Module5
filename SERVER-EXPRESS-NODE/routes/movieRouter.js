const express = require("express")
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const movies = [
    {title:"Fast & Furuos" , genre:"fantasy", _id:uuidv4()},
    {title:"Friend with benefit" , genre:"Romantic", _id:uuidv4()},
    {title:"Love Laugh Live" , genre:"fantasy", _id:uuidv4()},
    {title:"Menu" , genre:"fantasy",_id:uuidv4()},
]
//Get all
movieRouter.get("/",(req,res)=>{
    res.send(movies)
})
//Get one 
movieRouter.get("/:movieId",(req,res)=>{
const movieId = req.params.movieId
const foundMovie = movies.find(movie => movie._id === movieId)
res.send(foundMovie)
})

//Get genre
movieRouter.get("/search/genre",(req,res)=>{
const genre = req.query.genre
const filterMovie = movies.filter(movie => movie.genre === genre)
res.send(filterMovie)
})

//Post one 
movieRouter.post("/", (req,res)=>{
const newMovie = req.body
newMovie._id = uuidv4()
movies.push(newMovie)
res.send(`Succeful added ${newMovie.name} to the database!`)
})

//Delete one 

movieRouter.delete("/:movieId",(req,res)=>{
const movieId = req.params.movieId
const movieIndex = movies.findIndex(movie => movie._id === movieId)
movies.slice(movieIndex,1)
res.send("Successfully deleted movie from the data!")
})

//Update one 

movieRouter.put("/:movieId",(req,res)=>{
const movieId = req.params.movieId
const movieIndex = movies.findIndex(movie => movie._id === movieId)
const updatedMovie = Object.assign(movies[movieIndex], req.body)
res.send(updatedMovie)
})

    // movieRouter.route("/")
    // .get((req,res)=>{
    //     res.send(movies)
    // })

    // .post((req,res)=>{
    //     const newMovie = req.body
    //     newMovie._id = uuidv4()
    //     movies.push(newMovie)
    //     res.send(`Succeful added ${newMovie.name} to the database!`)
    //     })




module.exports = movieRouter