const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = 8000;
const app = express();
const bcrypt = require('bcrypt');

const {collection,addDoc, getFirestore,getDocs, where,query} = require('firebase/firestore');
const item = require("./components/item")
const user = require("./components/user")

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// 서버와 클라이언트 연동 -> 서버에 접속할때는 8000 PORT로 접근

app.use(cors())
app.use(express.static(path.join(__dirname,'..','client/build')))

// 상품 리스트 반환 API
app.get('/items',async(req,res) =>{
    res.send(await item.getItems())
})

// 상품 리스트 등록 API
app.post('/uploaditem',async(req,res)=>{
    const {no,cat_name,name,price,img} = req.body;
    const result = await item.uploadItem(no,cat_name,name,price,img);
    res.json({"result":result})
})

// 회원가입 API
app.post('/signup',async(req,res)=>{
    const {id,pw,name,email,phone,address} = req.body;
    const exist = await user.confirmId(id);
    if (exist==true){
        res.json({'result':'fail'})
    }else{
        const result = user.signup(id,pw,name,email,phone,address)
        res.json({'result':result})
    }
    
})
app.post('/confirmId',async(req,res)=>{
    const {id} = req.body;
    const exist = await user.confirmId(id);
    res.json({"exist":exist})
})

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});