const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const adRouter = require('./routes/ad.route');
const userRouter = require('./routes/user.route');

const app = express();

const uri =
  'mongodb+srv://mipok:1234@workspace.fmokzha.mongodb.net/workshopv1?retryWrites=true&w=majority';

app.listen(process.env.PORT || 8000, () => {
  console.log('server is running on port 8000');
});

mongoose.connect('mongodb://localhost:27017/ads', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => console.log('Connected to database'));
db.on('error', (err) => {
  console.log('error by connecting to db', err);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'xyz567',
    store: MongoStore.create(mongoose.connection),
  })
);

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api', adRouter);
app.use('/api/user', userRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});
