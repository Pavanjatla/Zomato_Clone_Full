require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs

import googleAuthConfig  from "./config/google.config"

//Routes
import Auth from "./API/Auth/index";

import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";

// database connection
import ConnectDB from "./database/connection";

const zomato = express();

//passport configuration

googleAuthConfig(passport);

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(cors());
zomato.use(helmet());

zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/" , (req,res) =>{
    res.json({message:"setup express"});
});

zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);

zomato.listen(5000, () => 
    ConnectDB()
    .then(()=>console.log("server is running"))
    .catch(()=>
            console.log("server is running but database conection is failed")
        )
    );