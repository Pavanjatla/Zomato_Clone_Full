require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Routes
import Auth from "./API/Auth/index";

// database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(cors());
zomato.use(helmet());

zomato.get("/" , (req,res) =>{
    res.json({message:"setup express"})
});

zomato.use("/auth",Auth);

zomato.listen(6000, () => 
    ConnectDB()
    .then(()=>console.log("server is running"))
    .catch(()=>
            console.log("server is running but database conection is failed")
        )
    );