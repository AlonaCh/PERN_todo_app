const express = require('express');
//take my express library and it gonna run it
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

app.listen(5001, () => {
    console.log("Server has started on port 5001");
})