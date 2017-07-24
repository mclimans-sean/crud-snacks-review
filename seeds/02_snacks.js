const snacks = require('../snacks')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert(snacks);
    });
};
