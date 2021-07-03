module.exports = (app) => {
    const notes = require('./controller.js');

    app.post('/notes', notes.create);

    app.get('/notes', notes.findAll);

    app.get('/notes/:notesId', notes.findOne);

    app.put('/notes/:notesId', notes.update);

    app.delete('/notes/:notesId', notes.delete);

}