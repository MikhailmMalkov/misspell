var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function get_missp_options(exerc_num) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("missp_db");
    var coll = dbo.collection('words_and_missp');

    var cursor = coll.aggregate([{$sample: {size: exerc_num }}]);

    cursor.get(function(err, res){
      if (err) throw err;
      console.log(res);
      db.close();
    });
  });

}

get_missp_options(10);
