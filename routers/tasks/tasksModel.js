const db = require('../../data/config');

module.exports = {
    findTasks,
    insert
}


function findTasks(id) {
    return db('tasks')
        .select( 'tasks.id', 'projects.name', 'projects.description' )
        .where('tasks.project_id', id) 
        .leftJoin('projects','tasks.projects_id', 'projects.id')
       
}  

function insert(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(id => {
            return findTasks(id[0])
        })
}