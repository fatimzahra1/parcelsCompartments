import compartementModel from "../models/compartementModel.js";
import connect from '../../server.js'





const getCompartements =async (req,res) => {
     const compartements = await compartementModel.find({})
   return compartements
};

const addCompartement =async (req,res) =>{

    try {
        const {type, dimension1, dimension2, dimension3} =req.body;
    
        const newCompartement = new compartementModel({type, dimension1, dimension2, dimension3, available:true})
          newCompartement.save(()=>{
            try {
                res.send(newCompartement)
            } catch (error) {
                console.error(error)
            }
          })
          const db =  connect()
          db.collection('compartements').insertOne(newCompartement)
         
      
       } catch (error) {
        console.log(error)
       }
   
}

export {getCompartements, addCompartement}

