 var express  = require('express');
 var app      = express();                               // create our app w/ express
 var mongojs = require('mongojs'); 
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)
var db = mongojs('todolist', ['todolist']);
 app.use(bodyParser.json());
 app.use(express.static( __dirname + '/public'));    // set the static files location /public/img will be /img for users
 //####################################################################
 app.get('/todoList',function(req,res){
     console.log("I received get request from controller");
          db.todolist.find(function (err, docs) {
              console.log(err);
            //console.log(docs);
            res.json(docs);
            });
    
        });
 app.post('/todoList', function (req, res) {
  console.log(req.body);
  db.todolist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});
app.delete('/todoList/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.todolist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
   res.json(doc);
  });
});
app.get('/todoList/:id', function (req, res) {
  var id = req.params.id;
  console.log("iddddddddddd"+id);
  db.todolist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});
 
 app.put('/todoList/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.todolist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

