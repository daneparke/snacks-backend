exports.seed = function (knex, Promise) {
  return knex('reviews').del()
    .then(function () {
      return knex('reviews').insert([{
        title: "This sucks",
        text: "Taste like dogshit",
        rating: 2,
        snack_id: 1
      }]);
    });
};