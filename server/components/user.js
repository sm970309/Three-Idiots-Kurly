const { fb } = require("../modules/fb");
const { collection, addDoc, getFirestore, getDocs, where, query } = require('firebase/firestore');
const db = getFirestore(fb);
const bcrypt = require('bcrypt');
const jwt = require('../modules/jwt');

exports.confirmId =async (id)=>{
    let exist = false;
    const q = query(collection(db,'users'),where("id","==",id))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        exist = doc.exists();
    })
    return exist;
}

exports.signup = async(id,pw,name,email,phone,address) =>{
    const new_pw = bcrypt.hashSync(pw,10);
    try{
        await addDoc(collection(db,'users'),{
            "id": id,
            "pw": new_pw,
            "name":name,
            "email":email,
            "phone": phone,
            "address":address
        })
        return 'success'
    }catch(e){
        console.error("Error adding document: ", e);
        return 'fail'
    }

}
exports.getUsers =async ()=>{
    let jsonArray = new Array();
    const Snapshot = await getDocs(collection(db,'users'));
    Snapshot.forEach((doc) => {
        jsonArray.push(doc.data())
    })
    return jsonArray;
}
exports.signin = async(id,pw) =>{
    let user,exist;
    const q = query(collection(db,'users'),where("id","==",id))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        user = doc.data();
        exist = doc.exists();
    })
    if (user===undefined){
        return {'status':'fail'}
    }
    else if (await bcrypt.compare(pw,user.pw)==true){
        const jwtToken = await jwt.sign(user);
        return {"token":jwtToken.token,"status":'success'}
    }else{
        return {'status':'fail'}
    }
}