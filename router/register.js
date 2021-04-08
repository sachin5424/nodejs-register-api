const express = require("express");
const router = express.Router();
const multer = require('multer');
var validator = require("email-validator");
const bcrypt = require('bcrypt');

const Register = require('../models/user/register')

// ------------ multer ------------------
const storage = multer.diskStorage({
    destination:'./upload/images/',
   
    filename:(req,file,cd)=>{
        return cd(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage:storage,
    limit:{fileSize:1}
})
// --------------- End multer ---------------


router.post("/register" ,upload.single('Photo') , (req,res)=>{
    
         var Full_Name = req.body.Full_Name;
         var Email = req.body.Email
         var Phone = req.body.Phone
         var Photo = req.body.Photo
         var Birthday = req.body.Birthday
         var Gender = req.body.Gender
         var Password = req.body.Password
         var ConfirmPassword = req.body.ConfirmPassword
         var Policy = req.body.Password.Policy
         var full_Image_Path = "http://localhost:3002/upload/images/"
        
       

         if (!Full_Name){
            return res.status(400).json({
                massage: "Full name is required"
            })
        }
        if (Full_Name.length < 3) {
            return res.status(400).json(
                {
                    massage: "Full_Name length minimum 3 characters"
                })
        }

        if (!Email){
            return res.status(400).json({
                massage: "Email name is required"
            })
        }

        if (!validator.validate(`${Email}`)) {
            return res.status(400).json({
                massage: "please validate your email address "
            })
        }
       
        if (!Phone){
            return res.status(400).json({
                massage: "Phone name is required"
            })
        }
        if (Phone.length < 9) {
            return res.status(400).json(
                {
                    massage: "Phone length minimum 9 characters"
                })
        }
        if (!Photo){
            return res.status(400).json({
                massage: "Photo name is required"
            })
        }
        if (!Birthday){
            return res.status(400).json({
                massage: "Birthday name is required"
            })
        }
        if (!Gender){
            return res.status(400).json({
                massage: "Gender name is required"
            })
        }
        if (!Password){
            return res.status(400).json({
                massage: "Password name is required"
            })
        }
     
     
        const Registers = new Register({
            Full_Name:Full_Name,
            Email:Email,
            Phone:Phone,
            Photo:Photo,
            Gender:Gender,
            Birthday:Birthday,
            Password:Password,
            Policy:Policy,
        }) 
         Registers.save()
         console.log(Registers);
         return res.json({
            messsage:"successfully Item Create",
            success:1,
            user:Register
            
        })
        


   
})


module.exports = router