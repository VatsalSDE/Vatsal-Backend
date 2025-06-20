import multer from "multer"

const storage = multer.diskStorage({
    destination:function(req,file,cb){ // where to save the files 
        cb(null , "./public/temp") 
    },
    filename:function(req,file,cb){ //this tells what to name the file 
        // const uniqueSuffix = Date.now()+'-'+Math.round
        // (Math.random()*1E9)
        cb(null , file.originalname)
    } 
})

export const upload = multer({
    storage, 
})