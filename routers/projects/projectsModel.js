const db = require('../../data/config');

module.exports = {
    find,
    findById,
    findTasks,
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

function findTasks(id) {
    return db(tasks)
        .select([ 'tasks.id', 'projects.name', 'projects.description' ])
        .where('tasks.projecs_id', id)
        .leftJoin('tasks, tasks.project_id', 'projecs.id')
}

function add(project) {
    return db('projects')
        .insert(project)
        .then((id) => {
            return findById(id[0])
        })
        
}