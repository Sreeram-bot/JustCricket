const mongoose = require("mongoose");

const dealsSchema = mongoose.Schema({
    ProdId : {type: Number , required : true},
    ProductName : {type: String , required : true},
    Image : {type : String , required : true}
})

let collection = {};

const JustCricketDBURL = "mongodb://localhost:27017/JustCricketDB";

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

collection.getdealsCollection = async () => {
    try{
        let database = await mongoose.connect(JustCricketDBURL,connectionOptions);
        let dealModel = await database.model('deals',dealsSchema);
        return dealModel;
    }catch(error){
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    }
}

module.exports = collection;