const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

// outra forma

/* 
const {Router} = require('express');
const router = Router();

*/

router.post('/api/task/create',TaskController.create);

router.get('/api/task/list',TaskController.index);

router.get('/api/task/:id',TaskController.getById);

router.put('/api/task/update/:id', TaskController.updated);

router.delete('/api/task/delete/:id', TaskController.deleted);

router.use(TaskController.error)

module.exports = router;