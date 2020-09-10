// Set up MySQL connection.
var mysql = require("mysql");
const heroku = require("heroku");
//mysql://stl2ve7xz6vcx617:n01dv0wyxcj6iyxq@w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hsawasaao4o6zsjf

var connection = mysql.createConnection({
  host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "stl2ve7xz6vcx617",
  password: "n01dv0wyxcj6iyxq",
  database: "hsawasaao4o6zsjf"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
