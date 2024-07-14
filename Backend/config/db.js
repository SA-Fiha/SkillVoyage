import mongoose from "mongoose";


export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://andelif:SpiderWeb2001@cluster0.sstnf9w.mongodb.net/SKILLVOYAGE').then(()=>console.log("DB Connected"));
    
        //console.log("DB Connected");
      } catch (error) {
        console.error("DB Connection Error: ", error);
      }

}