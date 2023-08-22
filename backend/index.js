const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
app.get('/', function (req, res) {
  res.send('SUPER PROMOCODE');
});
let port = process.env.PORT;
if (port == null || port == '') {
  port = 5000;
}
app.listen(port, function () {
  console.log('Server started successfully');
});
