import express from 'express'
import Task from '../models/Task.js'

const taskRouter = express.Router()

taskRouter.get('/tasks', async (req, res) => {
    const tasks = await Task.find({})
        res.json(tasks)
})

export default taskRouter 