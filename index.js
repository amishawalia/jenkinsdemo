const express  = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log('home');
    res.send('Welcome node app')

})

app.get('/about', (req,res) => {
    console.log('about');
    res.send('about page')

})

app.listen(3000)