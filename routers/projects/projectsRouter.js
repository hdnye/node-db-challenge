const express = require('express');
const Projects = require('./projectsModel');

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
            if (project) {
                res.json(project)
            } else {
                res.status(404).json({
                    message: 'Unable to get project'
                })
            }
        })
})
router.post('/', (req, res) => {
       const projectData = req.body

        Projects.add(projectData)
          .then(project  => {
              res.status(201).json(project)
          })
            .catch(err => {
                res.status(404).json({
                    message: 'Unable to add project'
          })   
     })
   })    


module.exports = router;









module.exports = router;