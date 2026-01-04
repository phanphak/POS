const mysql = require("mysql2/promise")


const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE_NAME || "pos_ecommerce",

})

if(db){
    console.log("server connected...")
}else{
    console.log("server error!")
}

module.exports  = db;