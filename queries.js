const db = require('./database-connection');
module.exports = {
    getAllSnacks() {
        return db.select().from('snacks')
    },
    getAllReviews() {
        return db.select().from('reviews')
    },
    getReviewById(id) {
        return db('reviews').where('id', id)
    },
    getSnackById(id) {
        return db('snacks').where('id', id)
    },
    createSnack(newSnack) {
        return db('snacks').insert(newSnack).returning('*')
    },
    createReview(newReview) {
        return db('reviews').insert(newReview).returning('*')
    },
    editReview(id, review) {
        return db('reviews').where('id', id).update(review).returning('*')
    },
    deleteReview(id) {
        return db('reviews').where('id', id).delete()
    }



}