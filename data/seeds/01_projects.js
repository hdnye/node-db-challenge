
exports.seed = async function(knex) {
  await knex('projects').insert([
        { name: 'Clean Garage', description: 'Remove uneeded items and clean'},
        { name: 'Bathe Dogs', description: 'Wash all the dogs'},
        { name: 'Organize Closets', description: 'Reorganize to maximize space'}
      ]);
   };
