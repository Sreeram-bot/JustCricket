const connection = require('./connection');

let dealsDB = {}

dealsDB.getAllDeals = async () => {
    let deals = await connection.getdealsCollection();
    let dealsArray = await deals.find({},{_id:0});
    if(dealsArray.length) return dealsArray;
    else return null;
}

module.exports = dealsDB;