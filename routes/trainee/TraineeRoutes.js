const express = require('express');
const router= express.Router();
const controller = require('./TraineeControllers');



// router.get('/', controller.gettrainee)
router.post('/register',controller.addtrainee)
router.post('/login', controller.gettraineebyemailandpassword)
// router.put('/:id',controller.updateMentor)
// router.delete('/:id',controller.removeMentor)

 
module.exports= router;