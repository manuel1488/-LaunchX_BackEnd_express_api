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

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})