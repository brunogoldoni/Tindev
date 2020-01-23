const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb://bruno:omnistack@heineken-shard-00-00-mlhas.mongodb.net:27017,heineken-shard-00-01-mlhas.mongodb.net:27017,heineken-shard-00-02-mlhas.mongodb.net:27017/week8?ssl=true&replicaSet=Heineken-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
