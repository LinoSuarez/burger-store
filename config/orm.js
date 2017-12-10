var connection = require("../config/connection.js");

var orm = {

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      create: function(burgerName, cb) {

        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ( ? , 0 )"

        connection.query(queryString, [burgerName], function(err, result) {
        //   if (err) {
        //     throw err;
        //   }
        //   console.log("OK")
          cb(result);
        });
      },
      update: function(devoured, id, cb) {
        
                var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"
        
                connection.query(queryString, [devoured, id], function(err, result) {
                //   if (err) {
                //     throw err;
                //   }
                //   console.log("OK")
                  cb(result);
                });
              },
              delete: function(id, cb) {
                
                        var queryString = "DELETE FROM burgers WHERE id = ?"
                
                        connection.query(queryString, [id], function(err, result) {
                        //   if (err) {
                        //     throw err;
                        //   }
                        //   console.log("OK")
                          cb(result);
                        });
                      },
};


    // selectWhere: function(tableInput, colToSearch, valOfCol, func) {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    
    //     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //       func();
    //       return result;
    //     });
    //   }


// to export orm
module.exports = orm;