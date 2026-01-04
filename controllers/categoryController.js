const categoryModel = require("../models/categoryModel");

exports.getAllProduct = async (req, res) =>{
    

    const getAll_param = await categoryModel.getAll();
    res.json({
        success: true,
        message: "get All category successfully!",
        data: getAll_param
           
        
    })
}





// post or create category

exports.createCategory = async (req, res) =>{
    const {image, name, price} = req.body;

    const createCategory_param = await categoryModel.create(image,name , price);
    res.status(200).json({
        success: true,
        message: "Create category successfully!",
        data: createCategory_param
    });
}