const express = require ("express");

const hostname = "127.0.0.1";
const port = 3100;  

const app = express(); 
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './backend/curriculo.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("public"));

app.use(express.json());



app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 

	var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM Habilidades ORDER BY Num ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); 
});


app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/public/curriculo.html");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});