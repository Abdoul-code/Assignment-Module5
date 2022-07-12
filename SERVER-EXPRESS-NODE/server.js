const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) //Logs request to the console.
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/users", require("./routes/userRouter.js"))
app.use("/inventoryItems", require("./routes/inventoryRouter.js"))








app.listen(9000,()=>{
    console.log("server is running on port 9000")
})
