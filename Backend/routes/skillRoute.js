import express from "express"
import { addSkill } from "../controllers/skillController.js"
import multer from "multer"

const skillRouter = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req, file, cb)=>{
        return cb(null, '${Date.now()}${file.originalname}')
    }
})

const upload = multer({storage:storage})

skillRouter.post("/add", upload.single("image"), addSkill)




export default skillRouter;

//4:01:16