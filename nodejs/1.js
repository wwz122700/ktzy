var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'lianxi'
});
 
connection.connect();
 let sql="select * from p_goods limit 1"
//  console.log(sql)
connection.query(sql, function (error, results, fields) {
 console.log(results)
});
 
connection.end();