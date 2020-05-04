const express = require('express');
const Tasks = require('./tasksModel');
const db = require('../../data/config');
const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
   // const { id } = req.params
    const task = await db('tasks')
        res.json(task)        
      } catch(err) {
          console.log(err)
          next(err)
        }
    });

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await db('tasks').where({ id }).first()
        res.json(task)
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = {
              name: req.body.name,
              description: req.body.descripton
        }  
        const [id] = await db('tasks').insert(newTask)      
        const task = db('tasks').where('id', id).first()
        res.json(task)
     } catch(err) {
        console.log(err)
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
  try {
      const { id } = req.params
      await db('tasks').where({ id }).update(req.body)
      const updateTask = await db('tasks').where({ id }).first()
      res.status(202).json(updateTask)
  } catch(err) {
      next(err)
  }

})

module.exports = router;