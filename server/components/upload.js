const fs = require('fs')
const {fb} = require("./components/fb")
const { getStorage,ref,uploadBytes, getDownloadURL } = require('firebase/storage');
const storage = getStorage(fb);

const itemImageRef = ref(storage,`items/1.jpg`)
    fs.readFile('item.jpg',(err,data)=>{
        uploadBytes(itemImageRef,data)
        console.log(itemImageRef)
    })
    getDownloadURL(itemImageRef).then((url)=>{
        console.log(url)
    })

module.exports = itemImageRef;