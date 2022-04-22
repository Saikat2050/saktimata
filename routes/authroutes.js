const express = require('express');
const authcontrollers = require('../controllers/authcontrollers');
const employeecontrollers = require('../controllers/employeecontrollers');
const path = require('path');
const router = express.Router();
const multer  = require('multer');
const fileStorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/'))
      },
    filename: (req,file, next)=>{
        next(null, Date.now() + "--" + file.originalname);
    },
});
const upload = multer({ storage:  fileStorageEngine});



router.use(express.static(__dirname+"./uploads/"));

router.get('/', authcontrollers.home);

router.get('/login', authcontrollers.login);

router.get('/jgf647651FJFF78945hsfx', authcontrollers.index);

router.post('/ghrt7866rtccfoh885AA', authcontrollers.verify);

router.get('/employee', employeecontrollers.emplo);

router.get('/details/:id', employeecontrollers.detal);

router.get('/new', employeecontrollers.new007);

router.get('/remove/:id', employeecontrollers.delt);

router.post('/gfbff', upload.single('avatar'), employeecontrollers.saving);

module.exports = router;

    