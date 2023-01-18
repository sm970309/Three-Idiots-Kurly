const express = require('express')
const cors = require('cors')

const PORT = 8080;
const app = express();

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});