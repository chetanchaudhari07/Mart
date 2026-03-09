const supabase = require("../config/supabase");

exports.getProducts = async ()=>{
    const {data,error} = await supabase.from("products").select("*");
    if(error) throw error;
    return data;
};

exports.getProductById = async (id) =>{
    const {data,error} = await supabase.from("products").select("*").eq("id",id).single();

    if(error) throw error;
    return data;
};

