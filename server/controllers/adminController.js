
import jwt from 'jsonwebtoken'

const adminLogin = async(req,res) => {

    try{
        const {email,password}=req.body;//take email password from user when it is inputting 

        if (email!=process.env.ADMIN_EMAIL || password != process.env.ADMIN_PASSWORD) {

            return res.json ({success:false ,message: "invalid Credentials"})
            
        }

        const token=jwt.sign({email},process.env.JWT_SECRET)
        res.json({success:true,token})//if success it will create token for user
    }
    catch(error){
        console.log({success:false,message: error.message})
    }
 
}

export default adminLogin

//it allow user to login in application,first we get data from req body email password then verify it
//if same then allow user to login
//now create an api to go to main website for user in routes folder