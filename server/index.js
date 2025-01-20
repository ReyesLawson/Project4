import express from 'express'
import taskRouts from './Routes/tasks.js'
import cors from 'cors'
const app = express(); 
// const PORT = process.env.PORT || 3002;

app.use (express.json());

app.use(cors({ origin: "http://localhost:3000"}));

app.use ('/tasks', taskRouts)


app.get ('/', (req,res) =>{
    res.send ("This is Main Page")
})

app.listen ('3002', ()=> {
    console.log ("server is running on port 3002")
})

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT} `)
// })