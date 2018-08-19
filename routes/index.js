const express = require('express');
const path = require('path');
const router = express.Router();

const content = require('./../public/text/content.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mira and Junda',
    site: 'Mira and Junda\'s Wedding',
    eats: content[1].eat,
    souvenirs: content[4].souvenir
  });
});

console.log(content[1].eat.images);


/* GET sample page. */
router.get('/sample', function(req, res, next) {
  res.render('sample', { title: 'Express' });
});

module.exports = router;
