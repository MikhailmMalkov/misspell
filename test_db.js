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
  var myobj = { word: "Company Inc", misspelling: "Highway 37" };
  dbo.collection("misspellings").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

app.get("/msp_db", function(req, res) {
  res.render()
});
app.listen(27017, function() {
  console.log("Server started on port 27017!")
});
