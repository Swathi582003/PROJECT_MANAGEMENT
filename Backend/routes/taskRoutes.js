const express = require('express');

// import create task 
const {createTask, getTasks, getSingleTask, updateTask, deleteTask} = require('../controllers/taskControllers');

//set up router
const router = express.Router();

router.post('/',createTask);
router.get('/',getTasks);
router.get('/:id',getSingleTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);


module.exports=router;