const express = require('express');
const stockscontrollers = require('../controllers/stockscontrollers');
const router = express.Router();

router.get('/go_down', stockscontrollers.go_down);

router.get('/adding', stockscontrollers.add);

router.post('/phen68diloDI88r', stockscontrollers.add_new);

router.post('/saikat420', stockscontrollers.add_old);

router.get('/edit/:id', stockscontrollers.edit);

module.exports = router;