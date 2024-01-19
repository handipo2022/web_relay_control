//script connect to database
//*********************************************************************** */
var mysql = require("mysql"); //call built-in module

var dbconn = mysql.createConnection({
  //set params for connection to mysql database
  host: "localhost",
  user: "root",
  password: "",
  database: "relayesp",
});
dbconn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!");
});//get connect to dbase

module.exports = dbconn; //export module
