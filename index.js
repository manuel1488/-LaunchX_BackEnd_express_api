const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

app.get('/v1/explorers', (req, res) => {
    console.log('Api explorers')

    const explorer1 = {id: 1, name:'manuel'}
    const explorer2 = {id: 1, name:'manuel'}
    const explorer3 = {id: 1, name:'manuel'}
    const explorer4 = {id: 1, name:'manuel'}

    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})


app.get('/v1/explorers/:id', (req, res) => {
    console.log(`APi explorers GET request ${new Date()}`)
    console.log(`APi explorers with id: ${req.params.id}`)

    const explorer = {id: 1, name: 'manuel'}
    res.status(200).json(explorers)
})


app.post('/v1/explorers/', (req, res) => {
    console.log(`APi explorers GET request ${new Date()}`)
    const requestBody = req.body

    res.status(201).json({message: 'create'})
})


app.post('/v1/explorers/:id', (req, res) => {
    console.log(`APi explorers GET request ${new Date()}`)
    const requestBody = req.body

    res.status(201).json({message: 'create'})
})


app.put('/v1/explorers/:id', (req, res) => {
    console.log(`APi explorers PUT request ${new Date()}`)
    console.log(`APi explorers PUT request with id:${id}`)
    const requestBody = req.body

    res.status(201).json({message: 'update!!'})
})


app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`APi explorers DELETE request ${new Date()}`)
    console.log(`APi explorers DELETE request with id:${id}`)
    const requestBody = req.body

    res.status(201).json({message: 'update!!'})
})


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})