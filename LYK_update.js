const connectDb = require("./src/db/connection");
const findLYK_LaboratorColl = require("./LYK_LaboratorColl");
async function updateLYK_findLaboratorColl(){
    connectDb();
    try {
      await findLYK_LaboratorColl.updateOne(
        { "Lbid": "S2S211", 
    } ,
          {"price": 99999, }
          ) ;     
          await newDetail.save();
        console.log("access insert")

    }
    catch (err){         
            console.log(err);
            process.exit(0);     
    }
}
updateLYK_findLaboratorColl();