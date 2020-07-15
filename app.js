var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongodb = require("mongodb");
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

  create_Exercise(){

  };

  count_Points(){

  };

  get_Player_Answer(){

  };

};
// misspellings
class Misspellings {
  delete_correct_words() {
      fs.readFile('./misspelling.txt', function read(err, data) {
        if (err) throw err;
        const content = data;
      });
    };
    import_list_of_words(){

    };
    delete_duplicates(){

    };

    convert_db_into_json(){

    };
};

// exercise
class Exercise {


  take_word_boolean_pair(){

  };
  tick(){

    };

};

app.listen(4000, function(){
  console.log("Listening on port 4000")
});

module.exports = app;
