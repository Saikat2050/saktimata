const multer  = require('multer');
const Emp = require('../module/ewschema');

const emplo = (req,res)=>{
    Emp.find()
    .then((result)=>{
    res.render('ew',{result, title:"Employee Walefare"});
    })
    .catch((err)=>{
        console.log(err);
    })
};

const detal =(req,res)=>{
const id = req.params.id;
Emp.findById(id)
.then((result)=>{
res.render('ew_detas',{result, title:"Employee Walfare"});
})
.catch((err)=>{
    console.log(err);
})
};

const delt=(req,res)=>{
    const id=req.params.id;
    Emp.findByIdAndDelete(id)
    .then((result)=>{
        res.redirect('/employee');
    })
    .catch((err)=>{
        console.log(err);
    })
};

const new007=(req,res)=>{
    res.render('ew_datus',{title:"New Employee"});
};

const saving=(req,res)=>{
    const emp = new Emp(req.body);
    emp.save()
    .then((result)=>{
        res.redirect('/employee');
    })
    .catch((err)=>{
        console.log(err);
    })
};

module.exports={
    emplo, detal, delt, new007, saving
};