import express from 'express'
import Note from '../models/Note.js'

const noteRouter = express.Router()

noteRouter.get('/notes', async (req, res) => {
    const notes = await Note.find({})
        res.json(notes)
})

export default noteRouter 