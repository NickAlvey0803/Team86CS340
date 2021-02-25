// This is the main javascript file for the backend database management for team 86

// The header sets up the ports and pulls the correct files for running through Node.js

var express = require('express');
var mysql = require('./dbcon.js');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});


app.engine('handlebars', handlebars.engine);
var session = require('express-session');
var bodyParser = require('body-parser');
app.set('view engine', 'handlebars');
app.set('port', 52112);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))


// Users

app.get('/users',function(req,res,next){
  var context = {};
  var params = [];
  mysql.pool.query('SELECT * FROM users', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.parse(JSON.stringify(rows));
    res.render('users-view', context);
  });
});

app.get('/users/insert',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO users (`username`, `password`, `description`, `user_score`) VALUES (?,?,?,?)", 
    [req.query.username, req.query.password, req.query.description, req.query.user_score], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM users', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('users-view', context);
    });
  });
});

app.get('/users/delete',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM users WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM users', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('users-view', context);
    });
  });
});



// Videos



app.get('/videos',function(req,res,next){
  var context = {};
  var params = [];
  mysql.pool.query('SELECT * FROM videos', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.parse(JSON.stringify(rows));
    res.render('videos-view', context);
  });
});

app.get('/videos/insert',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO videos (`category`, `weight`, `uploader_weight`, `light_score`, `uid`) VALUES (?,?,?,?,?)", 
    [req.query.category, req.query.weight, req.query.uploader_weight, req.query.light_score, req.query.uid], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM videos', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('videos-view', context);
    });
  });
});

app.get('/videos/delete',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM videos WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM videos', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('videos-view', context);
    });
  });
});



// Competitions



app.get('/competitions',function(req,res,next){
  var context = {};
  var params = [];
  mysql.pool.query('SELECT * FROM competitions', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.parse(JSON.stringify(rows));
    res.render('competitions-view', context);
  });
});

app.get('/competitions/insert',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO competitions (`competition_name`, `lift_type`, `weight_class`, `lift_reps`) VALUES (?,?,?,?)", 
    [req.query.competition_name, req.query.lift_type, req.query.weight_class, req.query.lift_reps], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM competitions', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('competitions-view', context);
    });
  });
});

app.get('/competitions/delete',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM competitions WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM competitions', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('competitions-view', context);
    });
  });
});



// Comments



app.get('/comments',function(req,res,next){
  var context = {};
  var params = [];
  mysql.pool.query('SELECT * FROM comments', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.parse(JSON.stringify(rows));
    res.render('comments-view', context);
  });
});

app.get('/comments/insert',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO comments (`uid`, `vid`, `description`, `light_score`) VALUES (?,?,?,?)", 
    [req.query.uid, req.query.vid, req.query.description, req.light_score], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM comments', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('comments-view', context);
    });
  });
});

app.get('/comments/delete',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM comments WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM comments', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('comments-view', context);
    });
  });
});



// Videos_Competitions



app.get('/videos_competitions',function(req,res,next){
  var context = {};
  var params = [];
  mysql.pool.query('SELECT * FROM videos_competitions', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = JSON.parse(JSON.stringify(rows));
    res.render('videos_competitions-view', context);
  });
});

app.get('/videos_competitions/insert',function(req,res,next){
  var context = {};
  mysql.pool.query("INSERT INTO videos_competitions (`vid`, `cid`) VALUES (?,?)", 
    [req.query.vid, req.query.cid], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM videos_competitions', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('videos_competitions-view', context);
    });
  });
});

app.get('/videos_competitions/delete',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM videos_competitions WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query('SELECT * FROM videos_competitions', function(err, rows, fields){
      if(err){
        next(err);
        return;
      }
      context.results = JSON.parse(JSON.stringify(rows));
      res.render('videos_competitions-view', context);
    });
  });
});



///simple-update?id=2&name=The+Task&done=false&due=2015-12-5
// app.get('/simple-update',function(req,res,next){
//   var context = {};
//   mysql.pool.query("UPDATE workouts SET name=?, done=?, due=? WHERE id=? ",
//     [req.query.name, req.query.done, req.query.due, req.query.id],
//     function(err, result){
//     if(err){
//       next(err);
//       return;
//     }
//     context.results = JSON.parse(JSON.stringify(rows));
//     res.render('users-view',context);
//   });
// });

// ///safe-update?id=1&name=The+Task&done=false
// app.get('/safe-update',function(req,res,next){
//   var context = {};
//   mysql.pool.query("SELECT * FROM workouts WHERE id=?", [req.query.id], function(err, result){
//     if(err){
//       next(err);
//       return;
//     }
//     if(result.length == 1){
//       var curVals = result[0];
//       mysql.pool.query("UPDATE workouts SET name=?, done=?, due=? WHERE id=? ",
//         [req.query.name || curVals.name, req.query.done || curVals.done, req.query.due || curVals.due, req.query.id],
//         function(err, result){
//         if(err){
//           next(err);
//           return;
//         }
//         context.results = JSON.parse(JSON.stringify(rows));
//         res.render('users-view',context);
//       });
//     }
//   });
// });

// app.get('/users/reset-table',function(req,res,next){
//   var context = {};
//   mysql.pool.query("DROP TABLE IF EXISTS users", function(err){ //replace your connection pool with the your variable containing the connection pool
//     var createString = "CREATE TABLE users ("+
//     "user_id int(11) NOT NULL AUTO_INCREMENT,"+
//     "username varchar(255) NOT NULL,"+
//     "password varchar(255) NOT NULL,"+
//     "description varchar(255) DEFAULT NULL,"+
//     "user_score int(11) DEFAULT NULL,"+
//     "PRIMARY KEY (user_id),"+
//     "UNIQUE KEY username (username)";
//     mysql.pool.query(createString, function(err){
//       context.results = "Table Reset"
//       res.render('home',context);
//     })
//   });
// });

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
