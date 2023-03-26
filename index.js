import Note from '../models/Note.js'
import Task from '../models/Task.js'
import noteData from '../models/notes.json' assert {type: 'json'};
import tasksData from '../models/tasks.json' assert {type: 'json'}; 


async function seed() {
    await Task.deleteMany({})
    await Note.deleteMany({})
    await Task.create(tasksData)
        .then(task => {
            console.log(task)
        })
    await Note.create(noteData)
        .then(note => {
            console.log(note)
        })
 process.exit()
}
seed()

/****/

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