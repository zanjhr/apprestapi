var mysql = require('mysql');

//koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ebook',

});

conn.connect((err) => {
    if (err) throw err;
    console.log('connect');
});

module.exports = conn;