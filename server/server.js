const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 8000;
const app = express();
const upload = require('./components/upload');

const {fb} = require("./components/fb");
const {collection,addDoc, getFirestore} = require('firebase/firestore');
const db = getFirestore(fb);

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

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

})

// 상품 리스트 등록 API
app.post('/uploaditems',async( req,res)=>{
    const {no,name,price,img} = req.body;
    console.log(no,name,price,img)
    try{
        await addDoc(collection(db,'items'),{
            'no':no,
            'name':name,
            'price':price,
            'img':img
        })
        res.send('complete')
    }catch(e){
        console.error("Error adding document: ", e);
    }
})

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});