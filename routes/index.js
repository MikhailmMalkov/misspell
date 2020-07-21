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
};


function get_missp_options(exerc_num) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("missp_db");
    var coll = dbo.collection('words_and_missp');

    var cursor = coll.aggregate([{$sample: {size: exerc_num }}]);

    cursor.get(function(err, res){
      if (err) throw err;
      var five_pairs = make_excercize(res);

      router.get('/current_question', function(req, res, next) {
        res.render('a_question', {
          title: 'Question x',
          word_1: five_pairs[0]["option"],
          word_2: five_pairs[1]["option"],
          word_3: five_pairs[2]["option"],
          word_4: five_pairs[3]["option"],
          word_5: five_pairs[4]["option"],
          answer: "Submit",
          text: "Sample"
        });
      });
    });
    db.close();
  });
}; // function get_missp_options


// Separate get_missp_options(), make_excercize(), and router.get() from each other and make get_missp_options() more descriptive.
get_missp_options(5);

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Hello, world!' });
// });

module.exports = router;
