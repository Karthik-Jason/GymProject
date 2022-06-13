const express = require('express')
const router = express.Router()
const {findAllTrainee,addTrainee,updateTrainee,findTrainee,deleteTrainee} = require('../controllers/apiController')

router.get('/', (req, res) => findAllTrainee(req, res))

router.get('/:id', (req, res) => findTrainee(req, res))

router.post('/add', (req, res) => addTrainee(req, res))

router.put('/update/:id', (req, res) => updateTrainee(req, res))

router.delete('/delete/:id',(req,res) => deleteTrainee(req,res))

module.exports = router