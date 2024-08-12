require('dotenv').config(); // Load environment variables


const Pool = require("pg").Pool;


const pool = new Pool({
   user: "postgres",
   host: "localhost",
   port: 5432,
   password: process.env.DATABASE_PASSWORD,
   database: "perntodo"


});
module.exports = pool;