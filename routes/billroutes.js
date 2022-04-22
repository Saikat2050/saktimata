const express = require('express');
const othercontrollers = require('../controllers/othercontrollers');
const receiptcontrollers = require('../controllers/receiptcontrollers');
const router = express.Router();

router.get('/billing', othercontrollers.billing);

router.get('/prt100', receiptcontrollers.invo);

router.post('/print14', othercontrollers.var_bill);

router.post('/ho', othercontrollers.nunu);

router.get('/goku', othercontrollers.fukra)

router.get('/saikat', othercontrollers.bonny);

router.get('/autocomplete', othercontrollers.dudu);

router.get('/search', othercontrollers.search);

module.exports = router;