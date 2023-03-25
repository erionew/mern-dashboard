import express from 'express'
import noteRouter from './routes/notes.js'
import taskRouter from './routes/tasks.js'
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Dashboard activated')
})

app.use('/', noteRouter)
app.use('/', taskRouter)


app.listen(process.env.PORT || 80, () => console.log('server started'))