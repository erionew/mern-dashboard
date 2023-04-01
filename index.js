import express from 'express'
import notes from  './routes/notes.js'
import tasks from './routes/tasks.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Dashboard activated')
})
app.use(notes);
app.use(tasks)





app.listen(process.env.PORT || 3000, () => console.log('server started'))