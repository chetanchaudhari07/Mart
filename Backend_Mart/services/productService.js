const productRepository = require("../repositories/productRepository");

exports.getProducts = async ()=>{
    return await productRepository.getProducts();
};


exports.getProductById = async (id) =>{
    return await productRepository.getProductById(id);
};