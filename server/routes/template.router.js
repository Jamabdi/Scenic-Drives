const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
    const query = `
      SELECT * FROM "routes"
        ORDER BY "title" ASC;
    `;
    pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all routes', err);
        res.sendStatus(500)
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


// DELETE
router.delete('/:id', (req, res) => {
  console.log('req.params', req.params);
  let queryText = 'DELETE FROM "routes" WHERE "id" = $1'; 
  pool.query(queryText, [req.params.id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Erro in DELETE /routes/:id', error);
      res.sendStatus(500);
  });
});

module.exports = router;
