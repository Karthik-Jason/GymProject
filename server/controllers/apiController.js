// const express = require('express')
// const route = express.Router()
const Trainee = require('../trainee.model')

function findAllTrainee(req, res) {
    Trainee.find().then(allTrainees => {
            res.send(allTrainees)
            console.log(' data : ', allTrainees)
        })
        .catch(err => {
            res.status(404).send('No data found')
            console.log('err finding data : ', err)
        })
}

function addTrainee(req, res) {
    let newTrainee = new Trainee(req.body)

    newTrainee.save().then(savedTrainee => {
            res.status(200).json({
                'trainee': 'trainee added successfully'
            })
            console.log('added data : ', savedTrainee)

        })
        .catch(err => {
            res.status(400).send('adding new trainee failed')
            console.log('err adding data : ', err)
        })
}


function updateTrainee(req, res) {
    Trainee.findById(req.params.id, (err, trainee) => {
        console.log('data found by id from DB for update: ', trainee);
        console.log('data found from UI for update: ', req.body);
        if (!trainee) {
            res.status(404).send("data not found")
            console.log("data not found : ", err)
        } else {
            trainee.trainee_name = req.body.trainee_name
            trainee.trainee_address = req.body.trainee_address
            trainee.trainee_fee = req.body.trainee_fee
            trainee.trainee_paidon = req.body.trainee_paidon
            trainee.trainee_aadhar = req.body.trainee_aadhar
            trainee.trainee_joined = req.body.trainee_joined

            trainee.save().then(updatedtrainee => {
                res.status(200).json({
                    "trainee": "trainee updated"
                })
            }).catch(err => {
                res.status(400).send("Update not Possible : ", err)
            })
        }
    })
}

function findTrainee(req, res) {
    Trainee.findById(req.params.id).then(foundtrainee => {
            res.send(foundtrainee)
            console.log(' data : ', foundtrainee)
        })
        .catch(err => {
            res.status(404).send('No data found')
            console.log('err finding data : ', err)
        })
}

function deleteTrainee(req, res) {
    Trainee.findByIdAndDelete(req.params.id).then(deletedTrainee => {
            res.send("data deleted ")
            console.log(' data deleted : ', deletedTrainee)
        })
        .catch(err => {
            res.status(404).send('No data found')
            console.log('err deleting data : ', err)
        })
}

module.exports = {
    findAllTrainee,
    addTrainee,
    updateTrainee,
    findTrainee,
    deleteTrainee
}