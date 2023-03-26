import express from 'express'
import noteRouter from './routes/notes.js'
import taskRouter from './routes/tasks.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Dashboard activated')
})

app.use('/', noteRouter)
app.use('/', taskRouter)


app.listen(process.env.PORT || 3000, () => console.log('server started'))