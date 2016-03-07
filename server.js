var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
var db = mongojs("beer", ["beers"]);


app.use(bodyParser.json());
app.use(cors());

app.post('/api/beer', function(req, res, next) {
  db.beers.save(req.body, function(err, response) {
    if (err) {
      return res.status(500).json(err);
    }
    else {
      return res.json(response);
    }
  });
});

app.get('/api/beer', function(req, res, next) {
  var query = {};

  if (req.query.name) {
    query.name = req.query.name;
  }
  if (req.query.type) {
    query.type = req.query.type;
  }
  if (req.query.id) {
    query._id = mongoJS.ObjectId(req.query. id);
  }
  db.beers.find(query, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });

});

app.put('/api/beer', function(req, res, next) {
    if (!req.query.id) {
      return res.status(400).send('id query needed');
    }

    var query = {
      _id: mongo.ObjectId(req.query.id)
    };

    db.beer.update(query, req.body, function(error, response) {
      if (error) {
        return res.status(500).json(error);
      } else {
        return res.json(response);
      }
    })
});

app.delete('/api/beer', function(req, res, next) {
  if (!req.query.id) {
    return res.status(400).send('id query needed');
  };
  var query = {
    _id: mongo.ObjectId(req.query.id)
  }
  db.beer.remove(query, function(error, response) {
    if(error) {
      return res.status(500).json(error);
    } else {
      return res.json(response);
    }
  })
});



app.listen(3000, function(){
  console.log('listening on port ' + 3000);
});
