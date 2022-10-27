var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers').usuariosController;

router.get('/', usuariosController.list);
router.post('/auth', usuariosController.getByEmail);
router.get('/full', usuariosController.listFull);
router.get('/:id', usuariosController.getById);
router.post('/', usuariosController.add);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);

module.exports = router;