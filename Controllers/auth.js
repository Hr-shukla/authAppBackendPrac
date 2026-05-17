const User=require("../Models/User");

const bcrypt=require("bcrypt");

exports.signup= async (req,res) =>{
    try{
                //get data
                const {name , email, password, role}= req.body ;

                const existinguser = await User.findone({email});
                if(existinguser){
                    return res.status(400).json({
                        sucess:false ,
                        message:'user already exists'
                    });

                }

                //secure password
                let hasedPassword;
                try{
                    hasedPassword=await bcrypt.hash(password,10);
                }
                catch(err){
                    return res.status(500).json({
                        success:false,
                        message:'error in hasing password'
                    });
                }

                //create entry
                const user = await User.create({
                    name,email,password:hasedPassword,role
                })

                return res.status(200).json({
                    success:true,
                    message:'user created successfully'
                })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'user cant be registered , try again'
        })

    }
}

exports.login=async (req,res)