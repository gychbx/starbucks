const starbucksdb=require('../db/starbucksdb.js');
function starbucksreg(name,username,psd,cb){
    starbucksdb.insertByNameUsernamePsd(name,username,psd,function(results){
        cb(results);
    })
}

function starbuckslogin(username,psd,cb){
    starbucksdb.selectNameByUsernamePsd(username,psd,function(results){
        if(results.length==0){
            cb(false);
        }else{
            cb(results[0].name);
        }
    })
}

exports.starbucksreg=starbucksreg;
exports.starbuckslogin=starbuckslogin;