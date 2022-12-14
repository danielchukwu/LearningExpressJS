const express = require('express');
const res = require('express/lib/response');

const router = express.Router();


router.get('/', (req, res) => {
   res.send('USERS HOME')
})

router.get('/new', (req, res) => {
   res.send('Add new users')
})

// dynamic routes should always be at the bottom of the page
router
   .route("/:id")
   .get((req, res) => {
      console.log(req.user)
      res.send(`GET user with id ${req.params.id}`)
   })
   .put((req, res) => {
      res.send(`GET user with id ${req.params.id}`)
   })
   .delete((req, res) => {
      res.send(`GET user with id ${req.params.id}`)
   })

const users = [{name: "kyle"}, {name: "Sally"}]
// middleware - a piece of code that runs inbetween a sent request and the response to that request
// e.g router.params is a middleware
router.param('id', (req, res, next, id) => {
   req.user = users[id];
   console.log(req.user)
   next()
})



module.exports = router