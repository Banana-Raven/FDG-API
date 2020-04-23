import express from 'express';
import routes from './src/routes/fdgRoutes';
import playerRoute from './src/routes/playerRoute'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const app = express();
const PORT = 4000;

//MySQL connection
var connection = mysql.createConnection({
    host: 'fdg.tnutting.com',
    user: 'fdgroot',
    password: 'DiscBallStick1!',
    database: 'fantasy_disc_golf'
  });

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  
   /*connection.query('CREATE TABLE people(id int primary key, name varchar(255), age int, address text)', function(err, result) {
      if (err) throw err
      connection.query('INSERT INTO people (name, age, address) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
        if (err) throw err
        connection.query('SELECT * FROM people', function(err, results) {
          if (err) throw err
          console.log(results[0].id)
          console.log(results[0].name)
          console.log(results[0].age)
          console.log(results[0].address)
        })
      })
    }) */
  });

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://BACKEND:$4allofus@fdg-zi4h2.mongodb.net/fdg?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
playerRoute(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);