const express = require('express');
const Tasks = require('./tasksModel');

const router = express.Router();


router.get('/:id', (req, res) => {
    const { id } = req.params.id

    Tasks.findTasks(id)
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            res.status(500).json({ 
                message: 'Failed to get tasks' });
        });

})

router.put('/:id', (req, res) => {
     Tasks.insert(req.body)
        .then(task => {
            res.status(202).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to update'
            })
        })

})

module.exports = router;