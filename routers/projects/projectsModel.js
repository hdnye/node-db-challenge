const db = require('../../data/config');

module.exports = {
    find,
    findById,
    add
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

function add(project) {
    return db('projects')
        .insert(project)
        .then((id) => {
            return findById(id[0])
        })
}