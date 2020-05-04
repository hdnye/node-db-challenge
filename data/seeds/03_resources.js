
exports.seed = async function(knex) {
     await knex('resources').insert([
       {name: 'Broom', projects_id: '1'},
       { name: 'Shampoo', projects_id: '2'},
       { name: 'Pressure Washer', projects_id: '1'},
       { name: 'Towels', projects_id: '2'},
       { name: 'Dog Brush', projects_id: '2'},
       { name: 'Storage Bins', projects_id: '3'},
     ])
};
