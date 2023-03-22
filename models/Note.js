import mongoose from '../db/connection.js'

const Note =  new mongoose.Schema({
    title : String, 
    body: String
})

export default mongoose.model("Note", Note)