const express = require('express');
const Tasks = require('./tasksModel');
const db = require('../../data/config');
const router = express.Router();


router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await db('tasks').where({ id }).first()
        res.json(task)        
      } catch(err) {
          console.log(err)
          next(err)
        }
    });

router.put('/:id', async (req, res, next) => {
  try {

  } catch(err) {
      next(err)
  }

})

module.exports = router;