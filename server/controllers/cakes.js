const mongoose = require('mongoose');

const Cake = mongoose.model('Cake');

module.exports = {
    getAll(req, res) {
        Cake.find()
            .then(allCakes => res.json({ cakes: allCakes, msg: 'cakecakecakecake' }))
            .catch(err => res.json(err))
    },
    findOne(req, res) {
        Cake.find({ _id: req.params.id })
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },
    create(req, res) {
        Cake.create(req.body)
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },
    update(req, res) {
        Cake.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    rating: req.body.newRating, 
                    comment: req.body.newComment
                }
            },
            {
                new: true
            }
        )
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },
    delete(req, res) {
        Cake.deleteOne({ _id: req.params.id })
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },
}