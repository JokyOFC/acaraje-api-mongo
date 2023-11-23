const express = require('express');
const cors = require('cors');
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const autoIncrement = require('mongoose-auto-increment');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var connection = mongo.connect(
    "mongodb+srv://JokyOFC:2eWxXZuuhVYaFYHQ@api-acaraje-app.0vwjhi5.mongodb.net/acaraje-db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(require('./app/routes'));

app.listen(3000, () => console.log('server on!'));
