var express = require('express');
var router = express.Router();
const citasController = require('../controllers').citasController;

router.get('/', citasController.list);
router.get('/:id', citasController.getById);
/*
router.post('/', citasController.add);
router.put('/:id', citasController.update);
router.delete('/:id', citasController.delete);
*/
module.exports = router;