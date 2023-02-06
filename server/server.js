const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 8000;
const app = express();
const upload = require('./components/upload');
const bcrypt = require('bcrypt');

const {fb} = require("./components/fb");
const {collection,addDoc, getFirestore,getDocs, where,query} = require('firebase/firestore');
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
        "price":12000,
        "name":"상품 이름"
    }):res.json("상품이 존재하지 않습니다")
}
)

// 상품 리스트 반환 API
app.get('/items',async (req,res) =>{
    let jsonArray = new Array();
    const snapshot = await getDocs(collection(db,'items'))
    snapshot.forEach((doc)=>{
        jsonArray.push(doc.data())
    })
    res.send(jsonArray)

})

// 상품 리스트 등록 API
app.post('/uploaditems',async(req,res)=>{
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

// 회원가입 API
app.post('/signup',async(req,res)=>{
    const {id,name,email,phone,address} = req.body;
    const pw = bcrypt.hashSync(req.body.pw,10);

    let exist = false;
    const q = query(collection(db,'users'),where("id","==",id))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        exist = doc.exists();
    })
    
    if (exist==true){
        res.send({'result':'fail'})
    }else{
        try{
            await addDoc(collection(db,'users'),{
                "id": id,
                "pw": pw,
                "name":name,
                "email":email,
                "phone": phone,
                "address":address
            })
            res.json({'result':'success'})
        }catch(e){
            console.error("Error adding document: ", e);
        }
    }

    
})
app.post('/confirmId',async(req,res)=>{
    const {id} = req.body;
    let exist = false;
    const q = query(collection(db,'users'),where("id","==",id))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        exist = doc.exists();
    })
    res.json({"exist":exist})
})

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});