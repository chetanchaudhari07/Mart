const userRepository = require("../repositories/userRepository");

exports.getUsers = async ()=>{
    return await userRepository.getUsers();

};

exports.getUserById = async (id) =>{
    return await userRepository.getUsersById(id);
};

