const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const PORT = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const {fb} = require("./components/fb")
const { getStorage,ref,uploadBytes, getDownloadURL } = require('firebase/storage');
const storage = getStorage(fb);

// 서버와 클라이언트 연동 -> 서버에 접속할때는 8000 PORT로 접근

app.use(cors())
app.use(express.static(path.join(__dirname,'..','client/build')))

app.get('/items/:num',(req,res) =>{
    const {num} = req.params
    num<100?res.json({
        "no":num,
        "image":".jpg",
        "name":"상품 이름"
    }):res.json("상품이 존재하지 않습니다")
}
)
app.get('/items',(req,res) =>{
    res.send('상품페이지')
    const itemImageRef = ref(storage,`items/1.jpg`)
    fs.readFile('item.jpg',(err,data)=>{
        uploadBytes(itemImageRef,data)
        console.log(itemImageRef)
    })
    getDownloadURL(itemImageRef).then((url)=>{
        console.log(url)
    })
})
app.post('/test',(req,res)=>{
    console.log(req.body)
    res.send('yes')
})

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});