//libraries

import express, { Router } from "express";
 //database model
 
import {FoodModel} from "../../database/allModels";
const Router = express.Router();

/*
Route              food/r/:_id
Des               food related to particular restaurant
params            none
Acess              public
method            get
*/

Router.get("/r/:_id", async (req,res) =>{
    try {
        const { _id} =req.params;

        const foods = await FoodModel.find({restaurant : _id});

        return res.json ({foods});
        
    } catch (error) {
        return res.status(500).json({error :error.message});
        
    }
});

/*
Route              food/c/:category
Des               food related to particular category
params            category
Acess              public
method            get
*/

Router.get("/c/:category", async (req,res) =>{

    try {
        const { category} =req.params;

        const foods = await FoodModel.find({
            category : { $regex : category , $options : "i"}});

        return res.json ({foods});
        
    } catch (error) {
        return res.status(500).json({error :error.message});
        
    }

});
 export default Router;