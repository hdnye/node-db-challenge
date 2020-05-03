const express = require('express');
const db = require('./../../data/config');
const Projects = require('./resourcesModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(404).json({
            message: 'Unable to get projects'
        })
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.find(id)
     .then(project => {
         if(project) {
             res.json(project)
         } else {
             res.status(404).json({
                 message: 'Unable to get projects'
             })
         }
     })
})






module.exports = router;