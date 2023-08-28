const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/items', db.getItems);

let port = process.env.PORT;
if (port == null || port == '') {
  port = 5000;
}
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
