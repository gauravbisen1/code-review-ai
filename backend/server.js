//server
require('dotenv').config();//key now access 
const app = require('./src/app');

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000");
});