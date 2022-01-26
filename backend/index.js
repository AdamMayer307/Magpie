const pool = require('./config/db.js');



//MYSQL DB Connection
pool.getConnection( (err, conn) => {
    if(err) throw err;
    const sql = 'INSERT INTO users(username, firstName, lastName, password, userType, company, phone, entry_date) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())';
    conn.query(sql, ['testy', 'tester', 'mcTesterton', 'test', 'user', 'tsinc', '555-555-5555'], (err, result) => {
        conn.release();
        if(err) throw err;
        console.log(result);
    });
});