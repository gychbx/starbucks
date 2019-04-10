const dbutils= require('../utils/dbutils.js');
//按昵称，用户名，密码注册
function insertByNameUsernamePsd(name,username,psd,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err);
        }else{
            var sql1="insert into starbucks(name,username,psd) values(?,?,?) ";
            conn.query(sql1,[name,username,psd],(err,results)=>{
                if(err){
                   cb(false);
                }else{
                   cb(results);
                }
            })
        }
    })
}
//按用户名，密码查找
function selectNameByUsernamePsd(username,psd,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err);
        }else{
            var sql2="select name from starbucks where username=? and psd=?"
            conn.query(sql2,[username,psd],(err,results)=>{
                cb(results);
            })
        }
    })
}

exports.insertByNameUsernamePsd=insertByNameUsernamePsd;
exports.selectNameByUsernamePsd=selectNameByUsernamePsd;