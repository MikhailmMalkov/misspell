MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("msp_db");
  dbo.createCollection("misspellings", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

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
        MongoClient.connect(url, current_word, current_spelling, function(err, db) {
          if (err) throw err;
          var dbo = db.db("msp_db");
          var myobj = { word: current_word, misspelling: current_spelling };
          dbo.collection("misspellings").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
        });
      };
    };

    for(w in word_array) {
      console.log(word_array[w]);
    };
});
