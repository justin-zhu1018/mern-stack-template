const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/flazey', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("Mongoose is connected...")
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use('/api', routes);

if (process.NODE_ENV === 'production') {
  app.use(express.static('./build'));
}

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, console.log(`SERVER IS STARTING AT ${PORT}`));
