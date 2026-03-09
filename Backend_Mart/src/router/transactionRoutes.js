const transactionsController = require("../controllers/transactionController");
const express = require("express");
const router = express.Router();    

router.get("/",transactionsController.getTransactions);
router.get("/:id",transactionsController.getTransactionById);


router.get("/user/:userid",transactionsController.getTransactionsByUserId);
router.get("/user/:userid/products",transactionsController.getProductsByUser);

module.exports = router;