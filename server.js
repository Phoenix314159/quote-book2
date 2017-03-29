const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');
const session = require('express-session');
const cors = require('cors');
const app = express();
let corsOptions = {
    origin: 'http://localhost:3050'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

app.get('/quotes', data.getData);
app.post('/quotes/post', data.postQuote);



app.listen(3050, () => {
    console.log("listening on port 3050");
});
