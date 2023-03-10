const express = require('express');
const router = express.Router();

const {Employee} = require('../models')


router.get('/', async(req,res,next)=>{
    try{
        let allEmp = await Employee.find({})
        res.render('employees/index.ejs', {emp:allEmp})
    }catch(err){
        console.log(err)
        return next()
    }
})


router.get('/new',(req,res,)=>{
        res.render('employees/new.ejs')
})


router.post('/new', async(req,res,next)=>{
    try{
        let newEmp = await Employee.create(req.body)
        res.redirect('/employee')
    }catch(err){
        console.log(err)
        return next()
    }
})

module.exports = router