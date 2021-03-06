//libraries

import express  from "express";
 //database model

import {RestaurantModel} from "../../database/allModels";

//validation

import { ValidateRestaurantCity,ValidateRestaurantSearchString } from "../../validation/restaurant";

import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
Route              /
Des               get all the restaurant details based on the city name
params            none
Acess              public
method            get
*/

Router.get("/", async (req,res) =>{
    try{

        await ValidateRestaurantCity(req.query);
        const {city} =req.query;
        const restaurants =await RestaurantModel.find({ city});

        return res.json({restaurants});

    }catch(error){
        return res.status(500).json({error :error.message})
    }
});


/*
Route             /restaurant
Des               get individual restaurant details based on id
params            none
Acess             public
method            get
*/

Router.get("/:_id", async (req,res) =>{
    try{
        await ValidateRestaurantId(req.params);

        const {_id} = req.params;

        const restaurant = await RestaurantModel.findById(_id);

        if(!restaurant){
            return res.status(404).json ({error : "Restaurant not found"})
        }
        return res.json({restaurant});

    }catch(error){
        return res.status(500).json({error : error.message});
    }
});

/*
Route             /restaurant/search
Des               get  restaurant details based on search string
params            none
Acess             public
method            get
*/

Router.get("/search" , async (req,res) =>{
    try{
        await ValidateRestaurantSearchString(req.params);
        const { searchString } = req.body;

        const restaurants = await RestaurantModel.find({
            name : {$regex : searchString , $options : "i"}
        });

        if(!restaurants){
            return res.status(404).json ({error : `Restaurant not matched your ${searchString}`})
        }
        return res.json({restaurants});

    }catch(error){
        return res.status(500).json({error :error.message})
    }
});

export default Router;