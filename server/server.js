const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = 8000;
const app = express();

// 서버와 클라이언트 연동 -> 서버에 접속할때는 8080 PORT로 접근
app.use(cors())
app.use(express.static(path.join(__dirname,'..','client/build')))


app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});