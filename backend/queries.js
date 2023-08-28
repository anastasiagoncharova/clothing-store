const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12341234',
  port: 5432,
})

const getItems = (request, response) => {
  pool.query('Select c.title, ci.name, ci.image_url, ci.price From category c INNER JOIN category_item ci on c.itemid = ci.itemid', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getItems
}