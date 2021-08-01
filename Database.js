var mysql = require('mysql')


var con = mysql.createConnection({
    host:"database-quiz-highscores.ci7tkowpkuqv.us-east-2.rds.amazonaws.com",
    user:"admin",
    password:"h1ghsc0res",
    database:"highscores_one"
})

con.connect(function(err){
    if(err)throw err;
    var sql = "INSERT into highscores_tech(Person,score) VALUES ('erson', '800')"
    con.query(sql, function(err, result){
    if(err)throw err;
    console.log("1 entry added")
    })
})