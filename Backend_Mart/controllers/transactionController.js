const transactionService = require("../services/transactionService");

exports.getTransactions = async (req,res,next) =>{
    try {
        const transactions = await transactionService.getTransactions();
        res.status(200).json({success:true, data:transactions});
    } catch (error) {
        next(error);
    }
};


exports.getTransactionById = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const transaction = await transactionService.getTransactionById(id);   
        res.status(200).json({success:true, data:transaction});
    } catch (error) {
        next(error);
    }
};

exports.getTransactionsByUserId = async (req,res,next) =>{
    try {
        const userId = req.params.userid;
        


        const transaction = await transactionService.getTransactionsByUserId(userId);
        res.status(200).json({success:true, data:transaction});

    } catch (error) {
        next(error);
    }
};

exports.getProductsByUser = async (req,res,next) =>{
    try {
        const userId = req.params.userId;
        const product = await transactionService.getProductsByUser(userId);
        res.status(200).json({success:true, data:product});
    } catch (error) {
        next(error);
    };

};

