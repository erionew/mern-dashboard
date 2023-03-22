import express from 'express'
import noteRouter from './routes/notes.js'
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Dashboard activated')
})

app.use('/', noteRouter)



app.listen(4000, () => console.log('server started'))