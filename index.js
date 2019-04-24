const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname+'/public/index.html'))

app.get('/login', (req, res) =>{
    // Talk to API server -- GOOGLE AUTH
})

app.get('/api/posts', (req, res) => {
    res.json([{postId: 1, name: 'test'}])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))