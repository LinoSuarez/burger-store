var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");


var arr = [{id:"hi"}, {id: "he"}];



router.get("/", function(req, res){
    var x = burger.all(function (x) {
        res.render('index', {arr : x})
    })
    // console.log(x)
    
})

router.post("/api/add", function(req, res){
    let burgerName = req.body.burgerName
    burger.create(burgerName, res)
    // res.send("DONE").end();
})

router.put("/api/update", function(req, res){
    let id = req.body.id;
    burger.update(1, id, res)
    // res.send("DONE").end();
})

router.put("/api/undo", function(req, res){
    let id = req.body.id;
    burger.update(0, id, res)
    // res.send("DONE").end();
})
router.delete("/api/delete", function(req, res){
    let id = req.body.id;
    
    burger.delete(id, res)
    // res.send("DONE").end();
})

module.exports = router;