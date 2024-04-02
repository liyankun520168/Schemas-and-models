const connectDb = require("./src/db/connection");
const findLYK_LaboratorColl = require("./LYK_LaboratorColl");
async function deleteLYK_findLaboratorColl(){
   
    try {
      await findLYK_LaboratorColl.deleteOne({  "Lbid": "S2S211" } ); 
          console.log('delete ok ');
        }
    catch (err){         
            console.log(err);
            process.exit(0);     
    }
}
connectDb();
deleteLYK_findLaboratorColl();