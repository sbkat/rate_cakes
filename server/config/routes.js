const cakesController = require('../controllers/cakes');

module.exports = function (app) {
    app.get('/api/cakes', cakesController.getAll);
    app.get('/api/cakes/:id', cakesController.findOne);
    app.post('/api/cake', cakesController.create); app.put('/api/cakes/:id', cakesController.update);
    app.delete('/api/cakes/:id', cakesController.delete);
}