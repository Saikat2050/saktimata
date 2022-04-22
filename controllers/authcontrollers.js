const _ = require('lodash');
const keys = require('../config/keys.json');
const phone = require('../config/phone.json');
const accountSid = keys.accountSid; // Your Account SID from www.twilio.com/console
const authToken = keys.authToken;   // Your Auth Token from www.twilio.com/console
const Nam = require('../module/userschema');
const Race = require('../module/invoiceschema');

const client = require('twilio')(accountSid, authToken);
const User = require('../module/schema');

var islogin = true;
var tr = 0000;

const home = (req,res)=>{
    
    res.render('home',{title: 'Home'});
    };

const login = (req,res)=>{
    islogin = false;
    tr = _.random(1001,9999);
    client.messages
        .create({body: `Your Pin for login is ${tr}.
    
    
        Warm Regards
        Saktimata Builders`, from: phone.sender, to: phone.receiver})
        .then(message =>{
        res.render('login',{title: 'Login'});
            console.log(message.sid)});
    };

const index = (req,res)=>{
    if(islogin)
    Nam.remove()
            .then((rs)=>{
                Race.remove()
                .then((koo)=>{
                    res.render('index',{title: 'Home'});
                })
            })
    
    else
    res.send('Log in first');
};

const verify = async (req,res)=>{
    const {email}=req.body.email;
    const password=req.body.password;
    const pin=req.body.pin;
    User.findOne(email)
    .then((result)=>{ 
    if(result.password===password){
        if(tr==pin){
            islogin = true;
            client.messages
          .create({body: `You are logged in.
    
          Warm Regards
          Saktimata Builders`, from: phone.sender, to: phone.receiver})
          .then(message =>{
            res.render('login',{title: 'Login'});
              console.log(message.sid)});
            res.redirect('/jgf647651FJFF78945hsfx');
        }
        else{
            islogin = false;
            res.send('Access Denied');
        return;
        }
    }
    else{
        islogin = false;
        res.send('Access Denied');
        return;
    }
    
    })
    .catch((err)=>{
    console.log(err);
    })
    };

module.exports ={
    home, login, index, verify, islogin:true
};