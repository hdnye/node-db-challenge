const express = require('express');
const Projects = require('./projectsModel');
const db = require('../../data/config');
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

// router.get('/:id', (req, res) => {
//     const { id } = req.params;

//      Projects.findById(id)
//         .then(project => {
//             res.json(project)
//          })       
//         .catch(err => {
//             console.log(err)
//             next(err)
//        })
// })

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const project = await db('projects').where({ id }).first()
        res.json(project)
    } catch(err) {
        console.log(err)
        next(err)
    }
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