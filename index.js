const express = require("express");
const app = express();
const port = 3000;

var dbconn = require("./dbase.js"); //call database connection module
let mysqlstr;
app.post("/relayOn", function (req, res) {
  let data = "";
  let buttonId;
  // let idunit, idcategory, getlen, tempstr;
  // let newproductname, newdetail, newunit, newcategory;
  req.on("data", (chunk) => {
    data += chunk; //get sent data in JSON format
    console.log(data);
  });
  setTimeout(() => {
    buttonId = JSON.parse(data).relay;
    mysqlstr =
      "update relay set status = " +
      true +
      " where relay = " +
      "'" +
      buttonId +
      "'";

    dbconn.query(mysqlstr, function (err, res) {
      if (err) throw err;
    });
    res.end();
  }, 1000);
});
app.post("/relayOff", function (req, res) {
  let data = "";
  let buttonId;
  // let idunit, idcategory, getlen, tempstr;
  // let newproductname, newdetail, newunit, newcategory;
  req.on("data", (chunk) => {
    data += chunk; //get sent data in JSON format
    console.log(data);
  });
  setTimeout(() => {
    buttonId = JSON.parse(data).relay;
    mysqlstr =
      "update relay set status = " +
      false +
      " where relay = " +
      "'" +
      buttonId +
      "'";
    dbconn.query(mysqlstr, function (err, res) {
      if (err) throw err;
    });
    res.end();
  }, 1000);
});

app.get("/hello", function (req, res) {
  res.send("hallo world!!");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
