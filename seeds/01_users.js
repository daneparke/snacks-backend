exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([{
        first_name: "Dane",
        last_name: "Parke",
        email: "dapa8522@colorado.edu",
        hashed_password: "password"
      }]);
    });
};