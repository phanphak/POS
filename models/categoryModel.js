const db = require("../database/db");

exports.getAll = async () =>{
    const sql = ("SELECT * FROM pos_ecommerce_tb");
    const [result] = await db.query(sql);
    return result;
}



// create cetegory or Post
exports.create = async (image, name, price) =>{
    const sql = ("INSERT INTO pos_ecommerce_tb (image,name, price) VALUES(?,?,?)");
    const [result] = await db.query(sql, [image, name, price]);
    return result;
}




// update or put data
exports.update = async (id, image, name , price) =>{
    const sql = ("UPDATE pos_ecommerce_tb SET image= ?, name= ? ,price= ? WHERE id = ?");
    const [result] = await db.query(sql, [image, name, price, id]);
    return result[0];
}




// delete or delete category
exports.delete = async (id) =>{
    const sql = ("DELETE FROM pos_ecommerce_tb WHERE id= ?");
    const [result] = await db.query(sql, [id]);
    return result[0];
}