const express = require('express');
const Resources = require('./resourcesModel');
const db = require('../../data/config');
const router = express.Router();

router.get('/', (req, res) => {
       Resources.find()
            .then(resources => {
                res.json(resources)
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Unable to get resources'
                })
          })
    })

    router.get('/:id', async (req, res, next) => {
        try {
            const { id } = req.params
            const resource = await db('resources').where({ id }).first()
            res.json(resource)
        } catch(err) {
            console.log(err)
            next(err)
        }
})  


module.exports = router;