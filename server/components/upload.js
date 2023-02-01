const fs = require('fs')
const {fb} = require("./fb")
const { getStorage,ref,uploadBytes, getDownloadURL } = require('firebase/storage');
const storage = getStorage(fb);
const itemImageRef = ref(storage,`items/1.jpg`)

function uploadItem(){
    fs.readFile('item.jpg',(err,data)=>{
        uploadBytes(itemImageRef,data)
        console.log(itemImageRef)
    })
    getDownloadURL(itemImageRef).then((url)=>{
        console.log(url)
    })
}


module.exports.uploadItem = uploadItem;