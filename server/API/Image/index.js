import express from "express";
import multer from "multer";

//database model

import { ImageModel } from "../../database/allModels";
//upload to s3

import { s3Upload } from "../../Utils/AWS/s3";
const Router =express.Router();
//multer config

const storage  =multer.memoryStorage();
const upload = multer({storage});



/*
Route              /image
Des                uploads given image to s3 bucket and saves file link to mongoose
params             node  
Acess              public
method             get
*/

Router.get("/:_id", async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params._id);
  
      return res.json({ image });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  /*
Route           /image
Des             Uploads given image to S3 bucket, and saves file link to mongodb
Params          none
Access          Public
Method          POST
*/

Router.post("/", upload.single ("file"), async(req,res) =>{
    try {

        const file =req.file;

        //s3 bucket options

        const bucketOptions ={
            Bucket: "",   //bucket name
            Key : file.originalname, 
            Body : file.buffer,
            ContentType : file.mimetype, //type of content
            ACL : "public-read"  //Accss control list

        };

        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage});
        
    } catch (error) {
        return res.status(500).json({error :error.message})
        
    }
} )

export default Router;
