var express = require('express');
var router = express.Router();
const pqrsController = require('../controllers').pqrsController;

router.get('/', pqrsController.list);
router.get('/:id', pqrsController.getById);
router.post('/', pqrsController.add);
router.put('/:id', pqrsController.update);
router.delete('/:id', pqrsController.delete);

module.exports = router;