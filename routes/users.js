const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
   res.send('USERS HOME')
})

router.get('/new', (req, res) => {
   res.send('Add new users')
})


module.exports = router