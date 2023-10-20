const express = require("express");
const mongoModel = require("../mongodb/mongodbModel");

const routes = express.Router();

routes.get('/add', (req, res) => {
    // const staff1 = mongoModel.Persons({
    //     date: '18-05-2023',
    //     name: 'staff1',
    //     collegeid: 'sit21staff1',
    //     permissions: 0,
    //     cost_leave: 0,
    //     no_of_ods: 0,
    // })
    // const staff2 = mongoModel.Persons({
    //     date: '18-05-2023',
    //     name: 'staff2',
    //     collegeid: 'sit21staff2',
    //     permissions: 0,
    //     cost_leave: 0,
    //     no_of_ods: 0,
    // })
    // const staff3 = mongoModel.Persons({
    //     date: '18-05-2023',
    //     name: 'staff3',
    //     collegeid: 'sit21staff3',
    //     permissions: 0,
    //     cost_leave: 0,
    //     no_of_ods: 0,
    // })


    // const staff4 = mongoModel.Persons({
    //     date: '18-05-2023',
    //     name: 'staff4',
    //     collegeid: 'sit21staff4',
    //     permissions: 0,
    //     cost_leave: 0,
    //     no_of_ods: 0,
    // })


    // const staff5 = mongoModel.Persons({
    //     date: '18-05-2023',
    //     name: 'staff5',
    //     collegeid: 'sit21staff5',
    //     permissions: 0,
    //     cost_leave: 0,
    //     no_of_ods: 0,
    // })
    
    // staff1.save();
    // staff2.save();
    // staff3.save();
    // staff4.save();
    // staff5.save();
    var todo = req.query.todo;
    var access = req.query.access;
    console.log(todo, access);
    mongoModel.Persons.find()
        .then((documents) => {
            res.render('add', { persons: documents, data: todo, access: access });
        })
        .catch((error) => {
            console.error(error);
            res.render('index');
        });
})

module.exports = routes;