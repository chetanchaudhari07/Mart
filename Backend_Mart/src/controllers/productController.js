const productService = require("../services/productService");

exports.getProducts = async (req, res , next) => {
    try {
        const products = await productService.getProducts();

        res.status(200).json({success:true, data:products});
    } catch (error) {
        next(error);
    }
};


exports.getProductById = async (req,res,next)=>{
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);

        if(!product){
            return res.status(404).json({success:false, message:"Product not found"});
        }       
    } catch (error) {
        next(error);
    }
}

