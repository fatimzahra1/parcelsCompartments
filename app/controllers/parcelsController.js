
import connect from '../../server.js'

const addParcels = async (req, res) => {
    const db = connect()
    const parcels = req.body
    let newArray=[]
   
    
    db.collection('compartements').find({}).toArray(async (err, results)=>  {
        let compartements = results
      
       for(let i=0;i< parcels.length; i++){
        const parcel = parcels[i]
        const height = parcel.dimensions.height
        const width = parcel.dimensions.width
        const depth = parcel.dimensions.depth
        let obj = {}

        let airDifference =null
        let mostFitCompartement ={}

        const parcelAir = height*width*depth

           for (let j=0;j< compartements.length;j++){
            const compartement = compartements[j]
          
           
            if(compartement.available===true)
            {
               
                const dimension1 = compartement.dimension1
                const dimension2 = compartement.dimension2
                const dimension3 = compartement.dimension3
              
                if((height<= dimension1 && width<= dimension2 && depth<= dimension3) ||
                   (height<= dimension1 && width<= dimension3 && depth<= dimension2) ||
                   
                   (height<= dimension2 && width<= dimension1 && depth<= dimension3) ||
                   (height<= dimension2 && width<= dimension3 && depth<= dimension1) ||
    
                   (height<= dimension3 && width<= dimension2 && depth<= dimension1) ||
                   (height<= dimension3 && width<= dimension1 && depth<= dimension2)
                   ) 
                {
                   
                    const compartementAir = dimension1*dimension2*dimension3
                   const difference = compartementAir-parcelAir
                  
                    if (airDifference===null||airDifference>difference){
                      
                          airDifference= difference
                          mostFitCompartement = compartement  
                         
                    } 
                }
               }
            }
            
       
           
            compartements.map((result) => {if(result._id===mostFitCompartement._id) {result.available=false}})
         obj = {parcelID: parcel.parcelId, mostFitCompartement}
           newArray.push(obj)
           
       }
       res.send(newArray)
    })
   
  

}

export {addParcels}