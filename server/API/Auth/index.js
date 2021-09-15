// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
// Models
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route           /signup
Desc            Register new user
Params          none
Access          Public
Method          POST
*/
Router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullName, phoneNumber } = req.body.credentials;

        await UserModel.findByEmailAndPhone(req.body.credentials);

        //save to db
        const newUser = await UserModel.create(req.body.credentials);

        //generate JWT auth token
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route           /auth/signin
Desc            signing in
Params          none
Access          Public
Method          POST
*/
Router.post("/signin", async (req,res) =>{
    try{
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({token, status :"success"});
        
    }catch(error){
        return res.status(500).json({error :error.message});
    }
});

/*
Route           /auth/google
Desc            signing in email and password
Params          none
Access          Public
Method          POST
*/

Router.get("/google",passport.authenticate("google",{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
}));

/*
Route           /auth/google
Desc            signing in email and password
Params          none
Access          Public
Method          POST
*/

Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        return res.json({ token: req.session.passport.user.token });
    }
);

export default Router;