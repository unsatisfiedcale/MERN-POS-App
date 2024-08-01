const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();


//! create
router.post("/add-product", async (req,res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json("Item added successfully!");
    }
    catch(error){
        res.status(400).json(error)
    }
})

//! get all product
router.get("/get-product", async (req,res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(error){
console.log(error);
    }
})

module.exports = router;