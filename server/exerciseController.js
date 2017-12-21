const express = require("express");
const exercise = require("./exerciseObject.js");

const router = express.Router();

router
    .get("/exercises",(req, res) => res.send(exercise.exercises))
    .get("/room", (req, res) => res.send(exercise.room))
    .post("/exercise/exercise_json",(req, res) => {
        exercise.exercise = exercise.getNextEx;
        exercise.exercise = [];
        res.status(201).send(exercise.exercise);
    })

    .post("/room/exercises",(req, res) => {
        exercise.room.exercises.push(req.body);

        res.status(201).send("posted");
    })

    .post("/room/users",(req, res) => {
        if(req.body.password == "mill"){
            console.log("password verified")
            let user = exercise.room.users.find(x=> x.fbid == req.body.fbid);
            if(!user){
                user = { name: req.body.name, id: exercise.room.users.length, fbid: req.body.fbid, picture: req.body.picture };
                exercise.room.users.push(user);                
            }

            res.status(201).send(user);
        }else{
            res.status(403).send("Invalid Password");
        }
    })


module.exports.router = router;