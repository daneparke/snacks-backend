const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())



app.get('/reviews', (req, res) => {
    queries.getAllReviews().then(response => res.send(response))
})
app.get('/snacks', (req, res) => {
    queries.getAllSnacks().then(response => res.send(response))
})
app.get('/snacks/:id', (req, res) => {
    queries.getSnackById(req.params.id).then(snack => res.status(200).send(snack[0]))
})
app.get('/reviews/:id', (req, res) => {
    queries.getReviewById(req.params.id).then(review => res.status(200).send(review[0]))
})

app.get('*', (req, res) => {
    res.send('page not found: 404')
})

app.post('/snacks', (req, res) => {
    queries.createSnack(req.body).then(snack => {
        res.send(snack)
    })
})

app.post('/reviews', (req, res) => {
    queries.createReview(req.body).then(review => {
        res.send(review)
    })
})

app.delete('/reviews/:id', (req, res) => {
    queries.deleteReview(req.params.id).then(res.status(204).send())
})

app.put('/reviews/:id', (req, res) => {
    queries.editReview(req.params.id, req.body).then(editReview => res.json(editReview))
})


app.listen(port, () => {
    console.log('listening on port:', port)
})

console.log('exit code 0')