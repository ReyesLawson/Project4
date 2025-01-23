import mysql from 'mysql2'




const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Nicholas2024!',
    database: 'todolistmanager'
})

db.connect((err) => {
    if (err){
        console.log ("Error on DB connection", err)
        return;
    }
    console.log ("connected to Task DB");

})

export default db;