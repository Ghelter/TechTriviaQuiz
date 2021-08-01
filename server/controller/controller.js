var ITdb = require('../model/model');
var awsDB = require('../model/model');


//create and save new names and scores
exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message : "Cannot be empty"})
        return;
    } 

    //adding new user
    const ITuser = new ITdb({
        Place : req.body.Place,
        name : req.body.name,
        score : req.body.score
    })
    //saving into db
    user
        .save(ITuser)
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.messsage || "Some error occurred while creating IT user"
            });
        });

}

//create and save new names and scores
exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message : "Cannot be empty"})
        return;
    } 

    //adding new user
    const awsDB = new awsDB({
        Place : req.body.Place,
        name : req.body.name,
        score : req.body.score
    })
    //saving into db
    user
        .save(awsDB)
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.messsage || "Some error occurred while creating AWS user"
            });
        });
}


//get highscores - names and score
exports.find = (req,res) => {
    
}