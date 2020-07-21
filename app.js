var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mongo = require('mongodb');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var mongodb = require("mongodb");
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
app.use('/current_question', indexRouter);
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

// DB connect
var MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb://localhost:27017/";
const misspellingsDB = "missp_db";
const misspellingsCollection = "words_and_missp";


class Game {

  // 1. Константы для: количества заданий, количества вопросов в заданиях, очков за правильный/неправильный ответ.
  // 2. Инициализация новой игры (обнулить счетчик упражнений, баллов)
  constructor() {
    this.numExercises = 10;
    this.numQuestionsInExercise = 5;
    this.correctAnswerPoints = 1;
    this.incorrectAnswerPoints = -1;
    this.excerciseCounter = 0;
    this.totalPoints = 0;
  }

  // 3. Вести счетчики упражнений и баллов (методы для обновления счетчиков)
  //      - Увеличить счетчик упражнений на 1
  //      - Увеличить счетчик баллов на N
  updateExcerciseCounter() {
    this.excerciseCounter += 1;
  }

  updatePoints(num) {
    this.pointCounter += num;
  }

  // 4. Проверка "закончилась ли игра?"
  over() {
    if (this.excerciseCounter >= this.numExercises) {
      return true;
    } else {
      return false;
    };
  }
} // game


class Misspellings {

  // 1. Загрузить в БД список слов и мисспеллингов из текстового файла
  // 2. Почистить БД от "плохих" слов
  //      - убрать дубликаты
  //      - слово или мисспеллинг короче трех букв
  //      - убрать географические названия
  //      - убрать имена
  //      - убрать мисспеллинги, которые равны правильным словам
  // 3. Достать из БД N случайных слов

  // 1. Загрузить в БД список слов и мисспеллингов из текстового файла
  importWords() {

  }

  // 2. Почистить БД от "плохих" слов
  сleanDB() {
    //      - убрать дубликаты
    //      - слово или мисспеллинг короче трех букв
    //      - убрать географические названия
    //      - убрать имена
    //      - убрать мисспеллинги, которые равны правильным словам
  }

  //      - убрать дубликаты
  deleteDuplicates(){

  }

  //      - убрать географические названия
  deleteGeo() {

  }

  //      - убрать имена
  deleteProperNames() {

  }

  //      - убрать мисспеллинги, которые равны правильным словам
  deleteCorrectWords() {

  }

  // 3. Достать из БД N случайных слов
  getNWords() {

  }

} // misspellings


class Exercise {

  // 1. Создать новое упражнение
  //      - Сформировать задание: 5 слов + правильные/нет?
  constructor(numWords) {
    var smArray = this.getWords(numWords);
    // DB: Как использовать константу из объекта Game с количеством слов в задании?
    this.exercise = this.makeExcercize(this.words);
  }

  showExerciseInConsole() {
    console.log(this.exercise);
  }

  // Взять массив из 5 слов+мисспелингов. Сделать массив - слово + правильное/нет
  makeExcercize(smArray) {
    var questionsArray = [];

    for (i in smArray) {
      var question = {};
      var correct_or_not = Math.random();

      if (correct_or_not > 0.3) {
        question = {option: smArray[i]['word'], correct: true};
      } else {
        question = {option: smArray[i]['misspelling'], correct: false};
      };

      questionsArray.push(question);
    };

    return questionsArray;
  }


  //      - Достать из БД 5 случайных слов с мисспеллингом
  getWords(numWords) {
    MongoClient.connect(mongoURL, function(err, db) {
      if (err) throw err;

      var dbo = db.db(misspellingsDB);
      var coll = dbo.collection(misspellingsCollection);
      var res = coll.findOne();

      console.log(res);

      // var cursor = coll.aggregate([{$sample: {size: numWords }}]);
      //
      // cursor.on('data', function(data) {
      //   console.log(data);
      //   items.push( data );
      // });
      //
      // console.log(items);

      // cursor.toArray(function(err, res){
      //   if (err) throw err;
      //   this.words = res;
      // });

      db.close();
    });
  }


  // 2. Вывести упражнение на экран
  show() {
    // router.get('/current_question', function(req, res, next) {
    //   res.render('a_question', {
    //     title: 'Question x',
    //     word_1: five_pairs[0]["option"],
    //     word_2: five_pairs[1]["option"],
    //     word_3: five_pairs[2]["option"],
    //     word_4: five_pairs[3]["option"],
    //     word_5: five_pairs[4]["option"],
    //     answer: "Submit",
    //     text: "Sample"
    //   });
    // });
  }

  // 3. Получить ответ игрока
  getPlayerAnswer(){

  }

  // 4. Посчитать баллы за одно упражнение
  countAnswerPoints() {

  }

  // 5. Вывести результат упражнения на экран
  showExcersiseResult() {

  }

  // 6. Закончить упражнение (обновить счетчики упражнений и баллов)
  finishExcersise() {

  }

} // exercise

var myExercise = new Exercise(7);

myExercise.showExerciseInConsole();


// myExercise.showWordsInConsole;


// app.listen(4000, function(){
//   console.log("Listening on port 4000")
// });
//
// module.exports = app;
