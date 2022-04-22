const {islogin} = require('./authcontrollers');
const Bill = require('../module/billschema');

const go_down = async(req,res)=>{
    if(islogin)
    {
       Bill.find()
       .then((result)=>{
           res.render('go_down',{result, title: 'Home'});
       })
       .catch((err)=>{
            console.log(err);
       })
    }
    else
    res.send('Log in first');
    };

const add = (req,res)=>{
    if(islogin)
    res.render('add',{title: 'Add Items'});
    else
    res.send('Log in first');
};

const add_new = (req,res)=>{
    if(islogin){    
    const bill = new Bill(req.body);
    bill.save()
    .then((result)=>{
        res.redirect('/jgf647651FJFF78945hsfx');
    })
    .catch((err)=>{
        console.log(err);
    })}
    else
        res.send('Log in first');
    };

const add_old = (req,res)=>{
    if(islogin){
        const id=req.body._id;
        Bill.findByIdAndUpdate(id, { item:req.body.item, uid:req.body.uid, company:req.body.company, quantity:req.body.quantity, price:req.body.price, unit:req.body.unit }, (err, rs) => {
        if (err)
            console.log(err);
        else{
            res.redirect('/jgf647651FJFF78945hsfx');
            console.log(`${rs}`);
        }
        })
    }
    else
        res.send('Log in first');
    };

const edit = (req,res)=>{
 const id = req.params.id;
 Bill.findById(id)
 .then((result)=>{
    res.render('show',{title: 'edit', result});
 })
 .catch((err)=>{
    console.log(err);
 })
};

module.exports ={
    go_down, add, add_new, add_old, edit
}