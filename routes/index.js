
const router = require("express").Router()
const User = require("../models/User")

//Add user
router.post("/createuser",async(req,res)=>{

    try{
        const { fullName, email } = req.body;
        console.log(fullName, email)
        const user = await User.create({fullName, email})
        res.status(200).json({status:true, message:"add user successufully",data:user})
    }catch(err){
        console.log(err)
        res.status(500).json({status:false,message:err})
    }

})



//Get all users 1er methode
// router.get("/getallusers", (req, res) => {
//     User.find()
//       .then((users) => res.send(users))
//       .catch((err) => console.log(err));
//   });

//get all users 2eme Methode
router.get("/getallusers",async(req,res)=>{

    try{
        const Listusers = await User.find({})
        res.status(200).json({status:true, message:"users List",data:Listusers})
    }catch(err){
        console.log(err)
        res.status(500).json({status:false,message:err})
    }

})


//update router
router.put("/updateuser/:id",async(req,res)=>{

    try{
        const {id} = req.params

        let user = await User.findById(id)
        if (user){
             const updatuser=await User.findByIdAndUpdate(id,{ ...req.body })
            res.status(200).json({status:true, message:"users updated...",data:updatuser})
        }else{

            res.status(404).json({status:true, message:"user is not exist!!!"})

        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({status:false,message:err})
    }

})



//Delete user
router.delete("/deleteuser/:id",async(req,res)=>{

    try{
        const {id} = req.params

        let user = await User.findById(id)
        if (user){
            await User.findByIdAndDelete(id)
            res.status(200).json({status:true, message:"users deleted",data:user})
        }else{

            res.status(404).json({status:true, message:"user is not exist!!!",data:user})

        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({status:false,message:err})
    }

})



module.exports=router