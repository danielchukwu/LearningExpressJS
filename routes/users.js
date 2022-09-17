const express = require('express');

const router = express.Router();


router.get('/users', (req, res) => {
   res.send('USERS HOME')
})

router.get('/users/new', (req, res) => {
   res.send('Add new users')
})


module.exports = router