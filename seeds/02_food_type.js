/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Purina', description: 'Everything your pet needs for a silky smooth coat!'},
    {id: 2, name: 'Nutribar', description: 'Human food, tastes like pet food!'},
    {id: 3, name: 'Sunflower Seeds', description: 'Ranch flavored!'},
    {id: 4, name: 'Bread Crumbs Inc', description: 'Shredded wonderbread!'}
  ]);
};
