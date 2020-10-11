const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const pessoas = require('./pessoasRoute')
const turmas = require('./turmaRoute')
const niveis = require('./niveisRoute')


module.exports = app =>{

    app.use(bodyParser.json())

    app.use(pessoas)
    
    app.use(niveis)
    
    app.use(turmas)

    app.get('/', (req,res)=>{
    res.send('Ok')
    })

}
