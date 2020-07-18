var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/current_question', function(req, res, next) {
  res.render('a_question', {
    title: 'Question x',
    title: 'Question x',
    word_1: 'Hello, world!',
    word_2: 'Hello, world!',
    word_3: 'Hello, world!',
    word_4: 'Hello, world!',
    word_5: 'Hello, world!',
    answer: "Submit",
    text: "Sample"
  });
});

module.exports = router;
