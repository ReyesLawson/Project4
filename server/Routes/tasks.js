import express, { response } from 'express'
import db from '../dbConnection.js'


const Router = express.Router ()

Router.get ("/", (req, res)=> {
    db.query ("Select * From tasks ", (err, result) => {
        if (err){
            console.log ("Error Listing Task:", err)
            res.status(500).send("error in Query")
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
            res.status(500).send("error in Query")
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
            res.status(500).send ("error in the Query")
        }
        else
            res.send(result)
    })
})

// Router.post("/login", (req, res) => {
//     const sql = "SELECT * FROM userid WHERE username = ? And password = ?";
//     const values = [
//         req.body.email,
//         req.body.password
//     ];
//     db.query (sql, values, (err, data) => {
//         if (err) {
//             console.log ("Error in login retrieval:", err)
//             res.json("Login Fail");
//         }
//         else {
//             res.json(data);
        
//         }
//     })
export default Router;