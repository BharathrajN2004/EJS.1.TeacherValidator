const express = require("express");
const mongoModel = require("../mongodb/login");
const routes = express.Router();

routes.get('/login', (req, res) => {
    // var staff = mongoModel.users({
    //     name: 'Harish',
    //     collegeid: 'sit21cs123',
    //     access: 'staff',
    //     password: 'harish@123'
    // });
    // var hod = mongoModel.users({
    //     name: 'HODCSE',
    //     collegeid: 'sit21cs001',
    //     access: 'hod',
    //     password: 'hodcse@001'
    // });
    // var principal = mongoModel.users({
    //     name: 'Principal',
    //     collegeid: 'sit21all001',
    //     access: 'principal',
    //     password: 'principal@001'
    // });
    // staff.save();
    // hod.save();
    // principal.save();
    res.render('login',);
});

routes.post('/login', async (req, res) => {
    const { id, password } = req.body;
    console.log(password);
    console.log(id);
    try {
       
        // Find the user by their ID in the database
        const user = await mongoModel.users.findOne({ collegeid: id });
        console.log(user);

        // If the user is not found, return an error
        if (!user) {
            return res.redirect('login');
        }

        // Compare the password with the hashed password in the database

        const isMatch = await password === user.password;

        // If the passwords don't match, return an error
        if (!isMatch) {
            return res.redirect('login');
        }
        
        res.redirect(302,"/?id="+user.collegeid);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = routes;