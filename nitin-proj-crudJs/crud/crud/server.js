const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());

const dbConfig = require('./database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Sucessful connected to database")
}).catch(e => {
    console.log("could not connect");
    process.exit();
})

app.get('/', (req, res) => {
    res.json({ "messgae": "welcome to our page" });
})
app.listen(3000, () => {
    console.log("server is listening");
})

require('./route.js')(app);