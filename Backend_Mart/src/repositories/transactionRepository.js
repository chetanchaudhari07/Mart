const supabase = require("../config/supabase");


exports.getTransactions = async () =>{
    const {data,error} = await supabase.from("transactions").select("*");
    if(error) throw error;
    return data;
};

exports.getTransactionsById = async (id) =>{
    const {data,error} = await supabase.from("transactions").select("*").eq("id",id).single();

    if(error) throw error;
    return data;
};

exports.getTransactionsByUserId = async(userId) =>{
    const {data,error} = await supabase.from("transactions").select("*").eq("user_id",userId);
    if(error) throw error;
    return data;
};

exports.getProductsByuser = async (userId) =>{
    const {data,error} = await supabase.from("transactions").select(`
      id,
      transaction_date,
      transaction_items (
        quantity,
        price,
        products (
          id,
          name,
          category,
          price
        )
      )
    `).eq("user_id",userId);

    if(error) throw error;
    return data;
};
