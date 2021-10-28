import express from "express";
import passport from "passport";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route              /review/:resid
Des               get all reviews based on id
params             _id  
Acess              public
method             get
*/
Router.get("/:resid", async (req,res) =>{
    try {

        const {resid} = req.params;
        const reviews = await ReviewModel.find({restaurant:resid});

        return res.json({reviews});
        
    } catch (error) {
        return res.status(500).json({error :error.message});
        
    }
});

/*
Route              /review/new
Des                 Add new food review
params              none
body                review object
Acess               private
method              post
*/ 

Router.post("/new", passport.authenticate("jwt") ,async (req,res) =>{
    try {
        const {_id} =req.session.passport.user._doc;

        const {reviewData} = req.body;

        await ReviewModel.create({...reviewData, user:_id});


        return res.json({review : "succesfully created review"});
        
    } catch (error) {
        return res.status(500).json({error :error.message});
        
    }
});


/*
Route              /review/delete/:_id
Des                 delete food review
params              _id
Acess               public
method              delete
*/ 

Router.delete("/delete/:_id", async (req,res) =>{
    try {

        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);


        return res.json({review : "succesfully deleted review"});
        
    } catch (error) {
        return res.status(500).json({error :error.message});
        
    }
});

export default Router;