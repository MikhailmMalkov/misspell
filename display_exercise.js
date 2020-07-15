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
}

var sample_array = [
  {word: 'caught', misspelling: 'cought'},
  {word: 'name', misspelling: 'neim'},
  {word: 'fight', misspelling: 'fite'},
  {word: 'travel', misspelling: 'trevel'},
  {word: 'fire', misspelling: 'faire'},
];

exerc = make_excercize(sample_array);

for (i in exerc) {
  console.log(exerc[i]);
};


var fs = require('fs');

fs.readFile('missp.txt', function(err, data) {
    if(err) throw err;
    var line_array = data.toString().split("\n");
    var word_array = [];
    var current_word = '';

    for(i in line_array) {
      var current_spelling = line_array[i];

      if (current_spelling[0] === '$') {
        current_word = current_spelling.substr(1);
      };

      if (current_spelling != '' && current_spelling.substr(1) != current_word) {
        var entry = {
          word: current_word,
          misspelling: current_spelling
        };
        word_array.push(entry);
      };
    };

    for(w in word_array) {
      console.log(word_array[w]);
    };
});


// function display_Exercise(pair){
//   var word_Pair = pair
//    display_questions(word_Pair){
//     MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("msp_db");
//       dbo.createCollection("misspellings", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//       });
//     });
//
//     fs.readFile('missp.txt', function(err, data) {
//         if(err) throw err;
//         var line_array = data.toString().split("\n");
//         var word_array = [];
//         var current_word = '';
//
//         for(i in line_array) {
//           var current_spelling = line_array[i];
//
//           if (current_spelling[0] === '$') {
//             current_word = current_spelling.substr(1);
//           };
//
//           if (current_spelling != '' && current_spelling.substr(1) != current_word) {
//             var entry = {
//               word: current_word,
//               misspelling: current_spelling
//             };
//             word_array.push(entry);
//           };
//         };
//         var words_Array = []
//         for(w in word_array) {
//           for(x in word_array[y]){
//             words_Array.push(word_Array[w][x])
//             app.get("/question", function(req, res){
//               res.send(word_array[w][y] + "\n");
//             });
//           };
//         };
//     });
//   };

// app.listen(4000, function(){
//   console.log("Server started on port 4000.")
// });
