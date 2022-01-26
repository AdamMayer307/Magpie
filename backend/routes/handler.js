const express = require('express');
const router = express.Router();
const pool = require('../config/db.js');

router.get('/users', async (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;

        try {
            const sql = 'SELECT * FROM users';
            conn.query(sql, (err, results) => {
                conn.release();

                if (err) throw err;
                res.send(JSON.stringify(results));
            });
        } catch(err) {
            console.log(err);
            res.end();
        }
    });
});

router.post('/addUser', async (req, res) => {
    //const newUser = req.body.userInput;
    const userName = req.body.userName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const userType = req.body.userType;
    const company = req.body.company;
    const phone = req.body.phone;

    

    pool.getConnection((err, conn) => {
        if (err) throw err;

        const sql = 'INSERT INTO users(username, firstName, lastName, password, userType, company, phone, entry_date) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())';
        conn.query(sql, ['testy', 'tester', 'mcTesterton', 'test', 'user', 'tsinc', '555-555-5555'], (err, result) => {
            conn.release();

            if (err) throw err;
            console.log('User Added!!!');
        });
        //when done go home
        res.redirect('/');
        res.end();
    });

});

module.exports = router;
