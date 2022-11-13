const mongoose = require("mongoose")
const adminReg = new mongoose.Schema({
    admin_fname:String,
    admin_lname:String,
    admin_email:{type:String,unique:true},
    admin_password:String
},{
    collection:"AdminInfo_sourav",
}
)
mongoose.model("AdminInfo_sourav",adminReg)
