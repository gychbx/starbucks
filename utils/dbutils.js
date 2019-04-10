const mysql=require('mysql');
const pool=mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'h51811'
})
exports.pool=pool;