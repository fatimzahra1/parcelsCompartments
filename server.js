import express from "express";
import cors from "cors";
import dbUrl from "./app/config/config.js";
import mongoose from "mongoose";
import {MongoClient, ServerApiVersion} from 'mongodb'
import compartementRouter from './app/routes/compartementRoutes.js' 
import parcelsRouter from "./app/routes/parcelsRoutes.js";
import dotenv from "dotenv";

dotenv.config()

const app = express();

const corsOptions = {
    origin : "http://localhost:8080"
}



const client = new MongoClient(dbUrl.url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

 const connect = () => {
    try {
        client.connect()
        console.log("connected")
    } catch (e) {
        console.error(e);
      
    }
    return client.db();
}

  //const db= mongoose.connection

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/compartements', compartementRouter)
app.use('/parcels', parcelsRouter)

//Simple route
app.get('/', (req, res) =>{
    res.json({message: "Welcome to Parcels Application"})
})

const PORT = process.env.NODE_LOCAL_PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})


export default connect


