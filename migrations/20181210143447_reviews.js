exports.up = function (knex, Promise) {
    return knex.schema.createTable('reviews', (review) => {
        review.increments('id')
        review.string('title')
        review.string('text')
        review.integer('rating')
        review.integer('snack_id').references('id').inTable('snacks')
        review.integer('user_id').references('id').inTable('users')
        // .onDelete('cascade')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('reviews')
}