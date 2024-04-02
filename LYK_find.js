const connectDb = require("./src/db/connection");
const LYK_findLaboratorColl = require("./LYK_LaboratorColl");
async function  getLYK_findLaboratorColl(){
      const Details = await LYK_findLaboratorColl.find();
      console.log(`get ${Details}`);
    process.exit(0);
}
connectDb();
getLYK_findLaboratorColl();