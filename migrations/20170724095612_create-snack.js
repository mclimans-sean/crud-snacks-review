
exports.up = function(knex, Promise) {
  return knex.schema.createTable('snacks', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('image_url').notNullable();
    table.text('review_description');
    table.integer('rating');
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snacks');
};
