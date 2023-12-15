const express = require('express');
const router = express.Router();

const moviesCtrl = require('../controllers/movies')

router.get("/", moviesCtrl.index)

router.get('/:id', moviesCtrl.show)

module.exports = router;