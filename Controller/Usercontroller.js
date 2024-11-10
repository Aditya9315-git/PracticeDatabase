
const usermodel=require('../Models/UserModel')

let Usersave= async (req,res)=>{
    let{name,email,password}=req.body

    try {
        let data =await usermodel.create({name,email,password })
        res.json({ msg: 'Registered Successfully!', success: true })

    } catch (error) {
        res.json({ msg: 'Error !', success: false, error: error.message })
    }

}


let Userlog= async (req,res)=>{
    let { email, password } = req.body

    let user =await usermodel.findOne({email})
    if(user){

        if(password == user.password){
            res.json({msg: 'Login Successfully!', success: true})
        }
        else{
            res.json({ msg: 'Wrong Password!', success: false })
        }
    }else{
        res.json({ msg: 'User not found !', success: false })
        
    }


}


module.exports={
    Usersave,
    Userlog
}