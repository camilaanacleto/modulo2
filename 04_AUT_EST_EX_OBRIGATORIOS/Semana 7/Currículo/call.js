const express = require ("express");

const hostname = "127.0.0.1";
const port = 3100;  

const app = express(); 
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './backend/cv.db';

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("public"));

app.use(express.json());



app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 

	var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM IDIOMAS ORDER BY Num ASC';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); 
});


app.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO IDIOMAS (Num, Nome) VALUES ('" + req.body.title;
	var db = new sqlite3.Database(DBPATH);
		db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.patch('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE IDIOMAS SET title = '" + req.body.title + "' WHERE Num = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); 
});


app.delete('/userdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 

	sql = "DELETE FROM IDIOMAS WHERE Num = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close();
});



app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/public/cV.html");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});