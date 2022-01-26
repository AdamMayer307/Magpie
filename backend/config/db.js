//const express = require('express');
const mysql = require('mysql');
require('dotenv/config');

//using pool instead of conn. conn creates errors when connect/end are not used correctly.
const pool = mysql.createPool ({
    //parameters are taken from .env file.
    connectionLimit: 10,
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

module.exports = pool;