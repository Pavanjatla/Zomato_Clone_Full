import express from "express";

import { UserModel } from "../../database/allModels";
import passport from "passport";

const Router = express.Router();

/*
Route              /
Des               get user data
params             null
Acess              public
method             get
*/

Router.get("/", passport.authenticate("jwt"), (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } =
        req.session.passport.user._doc;
  
      return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


/*
Route              /user/:_id
Des               get user data
params             _id  
Acess              public
method             get
*/
Router.get("/:_id", async (req,res) =>{
    try {

        const {_id} = req.params;

        const getUser = await UserModel.findById(_id);
        
        if(!getUser) return res.status(400).json({user:"user not found"});

        const  {fullName} = getUser;

        return res.json({user:getUser});
        
    } catch (error) {
        return res.status(500).json({error :error.message});
        
    }
});

/*
Route              /user/update
Des               update user data
params             _id
body                user data  
Acess              public
method             put
*/
Router.put("/update/:userId", async (req,res) =>{
    try {

        const {userId} = req.params;
        const { userData }=req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set : userData,
            },
            {
                new:true,
            }
            
            );


        return res.json({user:updateUserData});
        
    } catch (error) {
        return res.status(500).json({error :error.message});
        
    }
});

export default Router;
