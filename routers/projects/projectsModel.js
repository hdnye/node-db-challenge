const db = require('../../data/config');

module.export = {
    find,
    findById
};

function find() {
    return db('projects')
};

function findById() {
    return db('projects')
        .where({ id })
        .first()
        .then((record) => {
            return record !== undefined ? record : null
        })
};