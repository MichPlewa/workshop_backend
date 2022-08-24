const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('server is running on port 8000');
});

// conection to db

// end connection to db TO DO

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/client/build')));
