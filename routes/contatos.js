const express = require('express');
const router = express.Router();
const contatosController = require('../controllers/contatos');

router.get('/', contatosController.listar);
router.post('/', contatosController.criar);

module.exports = router;