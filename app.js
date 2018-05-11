var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bids_DB"
});




function ask () {
    inquirer.prompt([
        {
            type: "list",
            name: "Post or Bid",
            message: "Would you like to Post or Bid?",
            choices: [
                "POST",
                "BID"
            ]
        }
    ]).then(function (answer) {
        // If BID
        if (answer.choices === "BID") {
            bid();
        }

        // If POST
        else {
            post();
        }
    });
}

function bid() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
      });
      
    connection.query('SELECT * FROM `bids`', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        console.log(results);
      });
      
      connection.end();

}