const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  let queryText = 'SELECT * FROM "routes" ORDER BY "id";';
  pool.query(queryText).then((result) => {
      res.send(result.rows);
  })
  .catch((error) => {
      console.log('Error in GET /treats', error)
      res.sendStatus(500);
  })
});


  


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('req.body =', req.body);
  let queryText = `
      INSERT INTO "routes" ("name", "description", "map_pic", "route_pic")
      VALUES ($1, $2, $3, $4);
  `;
  pool.query(queryText, [
      req.body.name, 
      req.body.description, 
      req.body.map_pic,
      req.body.route_pic, 
  ]).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error in POST /routes', error);
      res.sendStatus(201);
  });
});


module.exports = router;
