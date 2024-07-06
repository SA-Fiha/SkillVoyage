import cors from "cors"
import express from "express"
import { connectDB } from "./config/db.js"
import skillRouter from "./routes/skillRoute.js"
import userRouter from "./routes/userRoute.js"
import'dotenv/config.js'

// App Config

const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//DB connection
connectDB();

//API endpoints
app.use("/api/skill", skillRouter);
app.use("/api/user", userRouter);





app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log('Server started on http://localhost:${port}')
})



