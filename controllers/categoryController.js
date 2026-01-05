const categoryModel = require("../models/categoryModel");

exports.getAllProduct = async (req, res) =>{
    try {
        
        
        const getAll_param = await categoryModel.getAll();
        if(!getAll_param){
            res.status(404).json({
                success: false,
                message: "require server Not founds!"
            })
        }
        res.json({
            success: true,
            message: "get All category successfully!",
            data: getAll_param
            
            
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error",
            

        })
    }
}





// post or create category

exports.createCategory = async (req, res) =>{
    try {
        
        const {image, name, price} = req.body;
        
        const createCategory_param = await categoryModel.create(image,name , price);
        if(!image || !name|| !price){
            res.status(404).json({
                success: false,
                message: "create requires server Not founds!"
            })
        }
        // respone back of server
        res.status(200).json({
            success: true,
            message: "Create category successfully!",
            data:{
                createCategory_param
            } 
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error"
            
        })
    }
}




// update or put category

exports.updateCategory = async (req, res) =>{
    try {
        
        const {id} = req.params;
        const {image, name, price} = req.body;
        const updateCategory_param = await categoryModel.update(id, image, name, price);
        if(!updateCategory_param){
            res.status(404).json({
                success: false,
                message: "ID update Not found!"
            })
        }
        //respone back
        res.status(200).json({
            success: true,
            message: "Update category successfully!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error"

        })
    }
}



// delete category
exports.deleteCategory = async (req, res) =>{
    try {
        const {id} = req.params;
        // req server
        const deleteCategory_param = await categoryModel.delete(id);
        if(!deleteCategory_param){
            res.status(404).json({
                success: false,
                message: "ID Not found!"
            })
        }

        // respone server back
        res.status(200).json({
            success: true,
            message: "Delete category successfully!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "server error"

        })
    }
}