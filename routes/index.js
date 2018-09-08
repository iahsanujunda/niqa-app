const express = require('express');
const path = require('path');
const router = express.Router();

const content = require('./../content/content.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mira and Junda',
    site: 'Mira and Junda\'s Wedding',
    airport: content[0].airport,
    eats: content[1].eat,
    sightsee: content[2].sightsee,
    souvenirs: content[3].souvenir,
    invitation: content[4].invitation
  });
});

module.exports = router;
