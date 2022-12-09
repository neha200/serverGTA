const express = require('express');
const router= express.Router();
const controller=require("./TaskControllers")

router.post('/',controller.postTask)

router.post('/gettask',controller.getTask)
router.post('/update',controller.updateTask)
router.post('/delete',controller.deleteTask)



module.exports= router;