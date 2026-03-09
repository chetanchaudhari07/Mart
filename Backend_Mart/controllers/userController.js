const userService = require("../services/userService");

exports.getUsers = async (req, res , next) => {
try {
    const users = await userService.getUsers();

    res.status(200).json({success:true, data:users});

} catch (error) {
    next(error);
}
};

exports.getUserById = async (req,res,next)=>{
    try {
        const id = req.parms.id;
        const user = await userService.getUserById(id);

        if(!user){
            return res.status(404).json({success:false, message:"User not found"});
        }   
        res.status(200).json({success:true, data:user});

    } catch (error) {
        next(error);
    }
}