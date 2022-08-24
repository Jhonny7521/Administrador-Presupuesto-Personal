const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: true}));

app.use(cors({
  origin: "http://localhost:3000"
}));
require('./server/routes/user.routes')(app); 

app.listen(8000, () => {
  console.log('Server ready on port 8000')
});