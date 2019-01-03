const db = require('./database-connection')
module.exports = {
    getAllSnacks() {
        return db.select().from('snacks')
    },
    getSnackById(id) {
        return db('snacks').where('id', id)
    },
    createSnack(newSnack) {
        return db('snacks').insert(newSnack).returning('*')
    },
    editSnack(id, snack) {
        return db('snacks').where('id', id).update(snack).returning('*')
    },
    deleteSnack(id) {
        return db('snacks').where('id', id).delete()
    },
    getAllReviews() {
        return db.from('reviews').select('reviews.id', 'title', 'text', 'rating', 'snack_id', 'user_id')
            .leftJoin('users', 'user_id', 'users.id').select('users.first_name', 'users.last_name')
    },
    getReviewById(id) {
        return db('reviews').where('id', id)
    },
    createReview(newReview) {
        return db('reviews').insert(newReview).returning('*')
    },
    editReview(id, review) {
        return db('reviews').where('id', id).update(review).returning('*')
    },
    deleteReview(id) {
        return db('reviews').where('id', id).delete()
    },
    getAllUsers() {
        return db.select().from('users')
    },
    getUserById(id) {
        return db('users').where('id', id)
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*')
    },
    deleteUser(id) {
        return db('users').where('id', id).delete()
    }
}