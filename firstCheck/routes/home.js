const express = require("express");
const mongoModel = require("../mongodb/login");
const routes = express.Router();

routes.get('/', (req, res) => {
    const collegeid = req.query.id;
    console.log(collegeid);
    mongoModel.users.findOne({ collegeid: collegeid }).then((doc) => {
        res.render('index',{user:doc});
    });
})

module.exports = routes;