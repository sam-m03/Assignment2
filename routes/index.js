var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about.ejs', { title: 'About' });
});

/* GET project page. */
router.get('/projects', function (req, res, next) {
  res.render('projects.ejs', { title: 'Projects' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact.ejs', { title: 'Contact' });
});



module.exports = router;
