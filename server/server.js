const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = 8000;
const app = express();

app.get('/goods/:num',(req,res) =>{
    const {num} = req.params
    num<100?res.json({
        "no":num,
        "image":".jpg",
        "name":"상품 이름"
    }):res.json("상품이 존재하지 않습니다")
}
)
// 서버와 클라이언트 연동 -> 서버에 접속할때는 8000 PORT로 접근
app.use(cors())
app.use(express.static(path.join(__dirname,'..','client/build')))

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});