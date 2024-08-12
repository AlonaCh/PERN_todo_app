const express = require('express');
//take my express library and it gonna run it
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo
app.post("/todos", async (req, res) => {
   try {
       const { description } = req.body;
       const newTodo = await pool.query(
           "INSERT INTO todo (description) VALUES($1)",
           [description]
       );
       res.json(newTodo);
   } catch (err) {
       console.error(err.message)
   }
}
)


app.listen(5001, () => {
    console.log("Server has started on port 5001");
})