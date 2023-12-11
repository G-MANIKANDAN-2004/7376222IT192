const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => res.send('Hello World! -7376222IT192 -MANIKANDAN G'))
app.get('/mani', (req, res) => res.send('Student Name : MANIKANDAN G ROLL NUMBER : 7376222IT192'))

app.get('/naveen', (req, res) => res.send('Student Name : NAVEEN KUMAR ROLL NUMBER : 7376222IT210'))
app.get('/madhan', (req, res) => res.send('Student Name : MADHAN KUMAR ROLL NUMBER : 7376222IT184'))

app.listen (PORT,  () => console.log(`Example app listening at http://localhost:${PORT}`))          