const express = require("express");
const cors = require("cors");
const supabase = require("./config/supabase");
const { config } = require("dotenv");
config();

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./router/userRoutes");
const productRoutes = require("./router/productRoutes");
const transactionRoutes = require("./router/transactionRoutes");

app.use("/api/transactions", transactionRoutes);
app.use("/api/user/:userid", transactionRoutes);
app.use("/api/user/:userid/products", transactionRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
    });
});

