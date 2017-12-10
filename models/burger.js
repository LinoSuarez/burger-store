var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
        
      });
    },
    create: function(burgerName, cb) {
        orm.create(burgerName, function(res) {
            
          cb.send(res);
        });
      },
      update: function(devoured, id, cb) {
        orm.update(devoured, id, function(res) { 
          cb.send(res);
        });
      },
      delete: function(id, cb) {
        orm.delete(id, function(res) { 
          cb.send(res);
        });
      }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  