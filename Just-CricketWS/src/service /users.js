const dealsDB = require('../model/users')

const dealsservice = {}

dealsservice.getAllDeals = async () =>{
    let dealsArray = await dealsDB.getAllDeals();
    if(dealsArray) return dealsArray;
    else{
        throwError("Something broke ! we will be right back, 404");
    }
}

module.exports = dealsservice