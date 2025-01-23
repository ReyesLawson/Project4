import express, { response } from 'express'
import db from '../dbConnection.js'


const Router = express.Router();

Router.get ("/", (req, res)=> {
    db.query ("Select * From tasks ", (err, result) => {
        if (err){
            console.log ("Error Listing Task:", err)
            res.status(500).json({ message:"error in the Query"})
}
        else
            res.send (result)
    })
})

Router.post("/", (req,res) => {
    const { tasks } = req.body;
    const sql = "INSERT INTO tasks (tasks) Values (?)";
    db.query (sql, [tasks], (err, result) => {
            if (err){
            console.log ("Error Adding Task:", err)
            res.status(500).json({ message:"error in the Query"})
        }
        else
            res.send ("result task added");
    
    })
})



Router.delete ("/:id" , (req,res) => {
    const taskid = req.params.id 
    db.query ("DELETE FROM tasks WHERE taskid = ?",[taskid], (err,result) =>{
        if (err) {
            console.log ("Error in Listing Students:", err)
            res.status(500).json({ message:"error in the Query"})
        }
        else
            res.send(result)
    })
});




export default Router;