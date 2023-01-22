const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
//middlewares
app.use(bodyParser().json());

//mysql

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

//routes
app.get('/',(req,res)=>{
    res.send('Welcome to my API');
})

// server running
const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})