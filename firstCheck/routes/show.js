const express = require("express");
const mongoModel = require("../mongodb/mongodbModel");
const routes = express.Router();


// Serve the HTML file
routes.get('/show', (req, res) => {
    mongoModel.Persons.find()
        .then((documents) => {
            console.log("from show all");
            res.render('alldata', { persons: documents })
        })
        .catch((error) => {
            console.error(error);
            res.render('index');
        });
});

function alldatashow(res) {
    mongoModel.Persons.find()
        .then((documents) => {
            console.log("all data show");
            res.render('alldata', { persons: documents })
        })
        .catch((error) => {
            console.error(error);
            res.render('index');
        });
}
routes.post('/show', (req, res) => {
    const myDocument = new mongoModel.Persons({
        date: req.body.date,
        name: req.body.name,
        collegeid: req.body.collegeid,
        permissions: req.body.permissions,
        cost_leave: req.body.cost_leave,
        no_of_ods: req.body.no_of_ods,
    });


    // Save the document to the database
    myDocument.save()
        .then((doc) => {
            // Display the table on page load
            alldatashow(res);
        })
        .catch((error) => {
            console.log("error");
            alldatashow(res);
            console.log(error);

        });
})

module.exports = routes;