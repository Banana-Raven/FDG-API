import mysql from 'mysql';
import db from '../../config/db_config'

//console.log(db.host);

var connection = mysql.createConnection({
    //host: 'fdg.tnutting.com',
    //user: 'fdgroot',
    //password: 'DiscBallStick1!',
    //database: 'fantasy_disc_golf'
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database
});

connection.connect();

export default connection;