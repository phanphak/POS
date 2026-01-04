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