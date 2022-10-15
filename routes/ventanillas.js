var express = require('express');
var router = express.Router();
const ventanillasController = require('../controllers').ventanillasController;

router.get('/', ventanillasController.list);
router.get('/full', ventanillasController.listFull);
router.get('/:id', ventanillasController.getById);
router.post('/', ventanillasController.add);
router.put('/:id', ventanillasController.update);
router.delete('/:id', ventanillasController.delete);

module.exports = router;