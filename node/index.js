const express = require('express');
const app = express();

const homeRouter = require('./routes/home');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.use('/', homeRouter);

module.exports = app;

const port = 3000

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})