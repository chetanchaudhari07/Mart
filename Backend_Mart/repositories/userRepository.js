const supabase = require("../config/supabase");


exports.getUsers = async () =>{
    const {data,error} = await supabase.from("users").select("id,name,email");
    if(error) throw error;
    return data;
};

exports.getUsersById = async (id) =>{
    const {data,error} = await supabase.from("users").select("*").eq("id",id).single();

    if(error) throw error;
    return data;
};

