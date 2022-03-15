const  express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/Home.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/About.html')
})
app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/Works.html')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))