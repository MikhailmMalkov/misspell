var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(
//   "mongodb://localhost:27017/",
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   },
//   function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("missp_db");
//     dbo.collection("words_and_missp").findOne({}, function(err, result) {
//       if (err) throw err;
//       console.log(result.word + ' => ' + result.misspelling);
//       db.close();
//     });
// });

MongoClient.connect(
  "mongodb://localhost:27017/",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("test_db");

    dbo.collection("employee").insertMany([
      {
      "id": "1",
      "firstName": "Vaibhav",
      "lastName": "Sharma",
      "phoneNumber": "9654XXXXXX",
      "city": "New Delhi",
      "state": "Delhi",
      "zip": 110001
     },
     {
      "id": "2",
      "firstName": "Sam",
      "lastName": "Sinha",
      "phoneNumber": "6363XXXXXX",
      "city": "New Delhi",
      "state": "Delhi",
      "zip": 110001
     },
     {
      "id": "3",
      "firstName": "Manoj",
      "lastName": "Verma",
      "phoneNumber": "9999XXXXXX",
      "city": "New Delhi",
      "state": "Delhi",
      "zip": 110001
     },
     {
      "id": "4",
      "firstName": "Anil",
      "lastName": "Kumar",
      "phoneNumber": "8881XXXXXX",
      "city": "UP",
      "state": "Lucknow",
      "zip": 226001
     },
   ]);

   var cursor = dbo.collection("employee").aggregate(
       [
         {
           $match:  { zip: 110001 }
         },
         {
           $group:
           {
             _id: null,
             no_of_employee: { $sum: 1 }
           }
         }
       ]
     );

    cursor.get(function(err, res){
      if (err) throw err;
      console.log(res);
    });

     // db.close();
});





//
// // Запуск сервера
// MongoClient.connect(
//   'mongodb://localhost:27017/alldatabase',  // строка подключения
//   {
//      useUnifiedTopology: true,  // установка опций
//      useNewUrlParser: true
//   },
//   function(err, database) {  // callback
//     if (err) {
//         return console.log(err);
//     }
//     // Ссылка на бд
//     db = database;
//     app.listen(3000, function() {
//         console.log('Подключение');
//     });
// });
