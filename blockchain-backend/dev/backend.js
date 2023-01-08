var mysql = require('mysql');

var con = mysql.createConnection({
  port :3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb",
  connectionLimit : 10,
  insecureAuth : true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




