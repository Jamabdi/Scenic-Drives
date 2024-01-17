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
        ORDER BY "name" ASC;
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


  //Route details rout here
  router.get('/:id', (req, res) => {
    // GET route code here
    const query = `
      SELECT * FROM "routes" WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
      .then(result => {
        //Returns the first item in the array, in this case the selected route in the details page.
        res.send(result.rows[0]);
      })
      .catch(err => {
        console.log('ERROR: Get route for Selected Route', err);
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
      INSERT INTO "routes" ("name", "description", "map_pic")
      VALUES ($1, $2, $3);
  `;
  pool.query(queryText, [
      req.body.name, 
      req.body.description, 
      req.body.map_pic,
  ]).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error in POST /routes', error);
      res.sendStatus(201);
  });
});


router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertRouteQuery = `
    INSERT INTO "routes" 
      ("name", "description", "map_pic")
      VALUES
      ($1, $2, $3)
      RETURNING "id";
  `;
  const insertRouteValues = [
    req.body.name,
    req.body.description,
    req.body.map_pic
  ]
  // FIRST QUERY MAKES MOVIE
  pool.query(insertRouteQuery, insertRouteValues)
    .then(result => {
      // ID IS HERE!
      console.log('New Route Id:', result.rows[0].id);
      const createdRouteId = result.rows[0].id

      // // Now handle the genre reference:
      // const insertMovieGenreQuery = `
      //   INSERT INTO "movies_genres" 
      //     ("movie_id", "genre_id")
      //     VALUES
      //     ($1, $2);
      // `;
      // const insertMovieGenreValues = [
      //   createdRouteId,
      //   req.body.genre_id
      // ]
      // // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      // pool.query(insertMovieGenreQuery, insertMovieGenreValues)
      //   .then(result => {
      //     //Now that both are done, send back success!
      //     res.sendStatus(201);
      //   }).catch(err => {
      //     // catch for second query
      //     console.log(err);
      //     res.sendStatus(500)
      // })
    }).catch(err => { // 👈 Catch for first query
      console.log(err);
      res.sendStatus(500)
    })
})











// DELETE
// router.delete('/:id', (req, res) => {
//   console.log('req.params', req.params);
//   let queryText = 'DELETE FROM "routes" WHERE "id" = $1'; 
//   pool.query(queryText, [req.params.id]).then((result) => {
//       res.sendStatus(200);
//   }).catch((error) => {
//       console.log('Erro in DELETE /routes/:id', error);
//       res.sendStatus(500);
//   });
// });

module.exports = router;
