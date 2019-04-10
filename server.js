const express = require("express");
const ejs = require('ejs');
const app = express();
//设置ejs
app.set('view engine','html');
app.engine('.html', require('ejs').__express);
//设置视图
app.set('views', __dirname+"/views");
//设置静态资源
app.use(express.static(__dirname+"/public"));
//设置处理post请求参数
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
//cookie
var cookieParser = require('cookie-parser');  
app.use(cookieParser());  
 
const starbucksService=require('./service/starbucksService.js')

app.get("/main.html",function(req,res){
    var obj=req.cookies;
    if("name" in obj){
        res.render("main",{name:obj.name})
    }else{
        res.render("main");
    } 
})
app.get("/login.html",function(req,res){
    var obj=req.cookies;
    if("name" in obj){
        res.render("main",{name:obj.name})
    }else{
        res.render("login");
    } 
})
app.get("/reg.html",function(req,res){
    res.render("reg");
})

app.post('/reg',function(req,res){
    var name=req.body.name;
    var username=req.body.username;
    var psd=req.body.psd;
    starbucksService.starbucksreg(name,username,psd,function(results){
        if(results){
            res.json({reg:"success"});
        }else{
            res.json({reg:"fail"});
        }
    }) 
})


app.post('/login',function(req,res){
    var username=req.body.username;
    var psd=req.body.psd;
    starbucksService.starbuckslogin(username,psd,function(results){
        if(results){
            res.cookie('name',results,{});
            res.json({login:'success'});
        }else{
            res.json({login:'fail'});
        }
    })
})


app.get('/loginout',function(req,res){
    res.clearCookie('name');
    res.json({login:'out'});
})

//底部scroll链接
app.get('/origin.html',function(req,res){
    res.render('origin');
})
app.get('/modulation.html',function(req,res){
    res.render('modulation');
})
app.get('/roast.html',function(req,res){
    res.render('roast');
})
app.get('/hand.html',function(req,res){
    res.render('hand');
})
//imghover
app.get('/welcome.html',function(req,res){
        res.render("welcome");
}) 
app.get('/joinus.html',function(req,res){
    var obj=req.cookies;
    if("name" in obj){
        res.render("joinus",{name:obj.name})
    }else{
        res.render("joinus");
    } 
})
//carousel1
app.get('/carousellink.html',function(req,res){
    var obj=req.cookies;
    if("name" in obj){
        res.render("carousellink",{name:obj.name})
    }else{
        res.render("carousellink");
    } 
})
//tianmao
app.get('/tianmao.html',function(req,res){
        res.render("tianmao");
})
app.listen(81, function() {
	console.log("服务器正在监听中...");
});
