const users = require('../users')

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
