require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs

import googleAuthConfig  from "./config/google.config";
import routeConfig from "./config/route.config";

//Routes
import Auth from "./API/Auth/index";

import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";
import Menu from "./API/Menu/index";
import Image from "./API/Image/index";
import Order from "./API/Orders/index";
import User from "./API/User/index";
import Review from "./API/Reviews/index";


// database connection
import ConnectDB from "./database/connection";

const zomato = express();

//passport configuration

googleAuthConfig(passport);
routeConfig(passport);

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
zomato.use("/menu",Menu);
zomato.use("/image",Image);

zomato.use("/order",Order);
zomato.use("/review",Review);
zomato.use("/user",User);

zomato.listen(5000, () => 
    ConnectDB()
    .then(()=>console.log("server is running"))
    .catch(()=>
            console.log("server is running but database conection is failed")
        )
    );