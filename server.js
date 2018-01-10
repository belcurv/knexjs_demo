const express    = require('express');
const bodyParser = require('body-parser');
const port       = process.env.PORT || 3000;
const app        = express();
const knex       = require('./db/knex');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// getting all todos
app.get('/todos', (req, res) => {
    // Using raw SQL
    // knex.raw('select * from todos')
    //     .then(todo => res.send(todo.rows));

    // Using KnexJS shortcut methods
    // Knex preselects response 'rows' for us
    knex.select()
        .from('todos')
        .then(todos => res.send(todos));
});

// getting one todo
app.get('/todos/:id', (req, res) => {
    // Using raw SQL
    // knex.raw(`select * from todos where id = ${req.params.id}`)
    //     .then(todo => res.send(todo.rows));

    // Using KnexJS shortcut methods
    // Knex preselects response 'rows' for us
    knex.select()
        .from('todos')
        .where('id', req.params.id)
        .then(todo => res.send(todo));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
