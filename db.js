/**
 * Created by devdeepak on 25/7/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host : "localhost",
    user : 'root',
    password : '',
    database : 'main'
};

var connection = mysql.createConnection(dbconfig);

connection.connect();

module.exports = connection;

function insertUsers(username,email,password,cb) {
    var connection = mysql.createConnection(dbconfig);
    console.log("SqlDB Connected");
    connection.connect();
    connection.query('INSERT into users (username,email,password) VALUES (?,?,?)',[username,email,password],function (error,rows,fields) {
        if(error) throw error;
        cb(rows);
    })

}

function getUsers(cb) {
    var connection = mysql.createConnection(dbconfig);
    console.log("SqlDB Connected");

    connection.connect();
    connection.query('SELECT * FROM users',function(error,rows,fields){
        if(error) throw error;
        cb(rows);
    })

}

function updateTodos(id,done,cb) {
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('UPDATE todos SET done='+ done + ' where id='+ id,function(error,rows,fields){
        if(error) throw error;
        console.log("Updated" + id);
        connection.query('SELECT * FROM todos',function(error,rows,fields){
            if(error) throw error;
            cb(rows);
        })
    })
}

module.exports = {
    insert:insertUsers,
    get: getUsers,
    update: updateTodos
};