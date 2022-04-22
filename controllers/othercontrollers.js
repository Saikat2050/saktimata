const {islogin} = require('./authcontrollers');
const Bill = require('../module/billschema');
const Nam = require('../module/userschema');
const Race = require('../module/invoiceschema');
const RegExp = require('regexp');

const billing = (req,res)=>{
    if(islogin)
    Nam.remove()
    .then((result)=>{ 
    Race.remove()
    .then(()=>{
    res.render('billname',{title: 'billing',result});
    })
})
.catch((error)=>{
    console.log(error);
})
    .catch((err)=>{
        console.log(err);
    })
    else
        res.send('Log in first');
    };

const var_bill = (req, res)=>{
    const nam = new Nam(req.body);
    nam.save()
    .then((result)=>{
        res.redirect('/goku');
    })
    .catch((err)=>{
        console.log(err);
    })
};

const nunu = (req,res)=>{
const uid = req.body.uid;
const quan = req.body.quantity;
Bill.findOne({uid: uid})
.then((answer)=>{
    const updt = answer.quantity-quan;
    Bill.findOneAndUpdate({uid: uid}, {$set:{quantity: updt}}, {new: true}, (err, doc) => {
        if (err) {
            console.log(err);
        }
    });
})
.catch((err)=>{
console.log(err);
})
const race = new Race(req.body);
race.save()
.then((result)=>{
    res.redirect('/saikat')
})
.catch((err)=>{
console.log(err);
})
};

const bonny = (req,res)=>{
    Race.find()
    .then((reshu)=>{
    res.render('goat',{reshu, title:"billing"});
    })
    .catch((err)=>{
        console.log(err);
    })
};

const fukra =(req,res)=>{
    Bill.find()
    .then((result)=>{
        res.render('god', {result, title: "Billing"});
    })
    
};

const dudu = (req,res)=>{
 var regex = new RegExp(req.query['term'], 'i');
 var itm = Bill.find({item:regex}, {'item':1}).sort({"updated_at":-1}).sort({"created_at":-1});
 itm.exec(function(err,data){
     var result=[];
     if(!err){
         if(data && data.length && data.length>0){
             data.forEach(user=>{
                 let obj={
                     id:user._id,
                     description:user.item,
                     price:user.price
                 };
                 result.push(obj);
             });
         }
         res.jsonp(result);
     }
 });

};

const search = (req,res)=>{
    let result = Bill.aggregate([
        {
            "$search":{
                "autocomplete": {
                    "query":`${req.query.term}`,
                    "path": "item",
                    "fuzzy":{
                        "maxEdits":2
                    }
                }
            }
        }
    ]).toArray();
    return result;
};

module.exports = {
    billing, var_bill, nunu, bonny, fukra, dudu, search
};
