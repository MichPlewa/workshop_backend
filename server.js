const express = require('express');
const cors = require('cors');
const path = require('path');

const adRouter = require('./routes/ad.route');
const userRouter = require('./routes/user.route');

const app = express();

// conection to db

// end connection to db TO DO

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api', adRouter);
app.use('/api', userRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

app.listen(process.env.PORT || 8000, () => {
  console.log('server is running on port 8000');
});
