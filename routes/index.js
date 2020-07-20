var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function make_excercize(sm_array) {
  var questions_array = [];

  for (i in sm_array) {
    var question = {};
    var correct_or_not = Math.random();

    if (correct_or_not > 0.3) {
      question = {option: sm_array[i]['word'], correct: true};
    } else {
      question = {option: sm_array[i]['misspelling'], correct: false};
    };

    questions_array.push(question);
  };

  return questions_array;
} // make_excercize

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("missp_db");
  dbo.collection("words_and_missp").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    var exercise = make_excercize(result);
    console.log(exercise);
    db.close();
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello, world!' });
});

router.get('/current_question', function(req, res, next) {
  res.render('a_question', {
    title: 'Question x',
    word_1: "Sample",
    word_2: "Sample",
    word_3: "Sample",
    word_4: "Sample",
    word_5: "Sample",
    answer: "Submit",
    text: "Sample"
  });
});

module.exports = router;
