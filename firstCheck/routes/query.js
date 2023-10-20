const express = require("express");
const mongoModel = require("../mongodb/mongodbModel");
const routes = express.Router();


routes.get('/query', (req, res) => {

  mongoModel.Persons.find()
    .then((documents) => {
      let documentList = [];
      documents.forEach((data) => {
        documentList.push({ 'date': data.date, 'name': data.name, 'collageid': data.collageid, 'permissions': data.permissions, 'cost_leave': data.cost_leave, 'no_of_ods': data.no_of_ods },);
      })
      console.log(documentList);
      res.render('queryPage', { persons: documentList,});
    })
    .catch((error) => {
      console.error(error);
      res.render('index');
    });
})


module.exports = routes;