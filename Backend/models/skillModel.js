import mongoose from "mongoose";


const skillSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    price:{type:Number, required: true},
    image:{type:String, required: true},
    catrgory:{type:String, required: true}
})


const skillModel = mongoose.model.skill || mongoose.model("skill", skillSchema)

export default skillModel;