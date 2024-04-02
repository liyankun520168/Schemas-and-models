const connectDb = require("./src/db/connection");
const findLYK_LaboratorColl = require("./LYK_LaboratorColl");
async function insertLYK_findLaboratorColl(){
    connectDb();
    try {
        const newDetail = new findLYK_LaboratorColl({
            "Lbid": "S2S211",
            "AssetName": "ad",
            "ServiceLife": 2,
            "price": 500000,
            "AssetDetail": [
              "2023010500111",
              "20230105000112",
              "20230105000113"
            ],
            "Agent": {
              "联系人": "Ma Yun",
              "联系电话": "13334277816",
              "Agentaddress": "Shang Hai"
            },
            "manufacturer": {
              "CompanyName": "Sai TE",
              "CompanyPhone": "010-11116666",
              "CompanyAddress": "BJ",
              "inPrice": 100000
            },
            "AssetClass": "ProfessionalSetting",
            "AssetManager": "wwz",
            "Affiliatedunit": "JXGCXY"
          } )      
          await newDetail.save();
        console.log("access insert")

    }
    catch (err){         
            console.log(err);
            process.exit(0);     
    }
}
insertLYK_findLaboratorColl();
