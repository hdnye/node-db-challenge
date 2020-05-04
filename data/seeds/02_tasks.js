
exports.seed = async function(knex) {
  await knex('tasks').insert([
    { name: 'Sweep', description: 'Using a broom, sweep floor', notes: '', projects_id: '1' },
    { name: 'Recylce',description: 'Take items to thrift shop', notes: '', projects_id: '1'},
    { name: 'Secure Dogs', description: 'Get leashes', notes: '', projects_id: '2' },
    { name: 'Get Treats', description: 'Keep treats close by', notes: '', projects_id: '2' },
    { name: 'Storage', description: 'Put winter clothes in storage', notes: '', projects_id: '3' },
    { name: 'Donate', description: 'Remove worn out clothes', notes: '', projects_id: '3' },
  ]);  
};
