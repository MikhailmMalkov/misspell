var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var fs = require('fs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// game
class Game {
  function create_Exercise(){

  };
  function count_Points(){

  };
  function get_Player_Answer(){

  };
};
// misspellings

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/msp_db";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("msp_db");
  dbo.createCollection("misspellings", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("msp_db");
  var myobj = { word: "Company Inc", misspelling: "Highway 37" };
  dbo.collection("misspellings").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
});
class Misspellings {
  function delete_correct_words(){
    fs.readFile('./misspelling.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;
    for (i=0, i<data.length, i++)

    console.log(content);
    processFile(content);
});

    for ()
    for (i=0, i<mSpellings.length, i++) {
      if misspellings
    };
  };
  function import_list_of_words(){

  };
  function delete_duplicates(){

  };
  function convert_db_into_json(){

  };

};
// exercise
class Exercise {
  function take_word_boolean_pair(){
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("msp_db");
    dbo.collection("misspellings").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
  });
});
  return pair
  };
  function display_Exercise(pair){
    var word_Pair = pair
    function display_questions(word_Pair){

    };
    function tick(){

    };
  };

  function(){

  };
};
app.listen(4000, function(){
  console.log("Listening on port 4000")
});

module.exports = app;
