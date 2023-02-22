const { fb } = require("./fb");
const { collection, addDoc, getFirestore, getDocs } = require('firebase/firestore');
const db = getFirestore(fb);


exports.getItems = async () => {
    let jsonArray = new Array();
    const snapshot = await getDocs(collection(db, 'items'))
    snapshot.forEach((doc) => {
        jsonArray.push(doc.data())
    })
    return jsonArray;
}

exports.uploadItem = async(no,cat_name,name,price,img)=>{
    console.log(no,cat_name,name,price,img)
    try{
        await addDoc(collection(db,'itemstest'),{
            'no':no,
            'cat_name':cat_name,
            'name':name,
            'price':price,
            'img':img
        })
        return 'complete'
    }catch(e){
        console.error("Error adding document: ", e);
        return 'fail'
    }

}
