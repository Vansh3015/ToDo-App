const express = require('express');

const router = express.Router();

const {getTodo, createTodo,updateTodo,deleteTodo} = require('../controllers/todo.controller');
const showLog = require ('../middleware/logger.middleware');
const {validateTodo} = require('../middleware/validation.middleware');

router.get('/',showLog, getTodo);
router.post('/', validateTodo, createTodo);
router.put('/:id',updateTodo);
router.delete('/:id',deleteTodo);

module.exports = router;