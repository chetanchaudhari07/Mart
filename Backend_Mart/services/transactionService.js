const transactionRepository = require("../repositories/transactionRepository");

exports.getTransactions = async ()=>{
    return await transactionRepository.getTransactions();
};

exports.getTransactionById = async (id) =>{
    return await transactionRepository.getTransactionsById(id);
};

exports.getTransactionsByUserId = async (userId) =>{
    return await transactionRepository.getTransactionsByUserId(userId);
};

exports.getProductsByUser = async (userId) =>{
    return await transactionRepository.getProductsByuser(userId);
};