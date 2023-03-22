import mongoose from '../db/connection.js'

const Task =  new mongoose.Schema({
    title : String, 
    toDos: [String],
    urgency: String
})

export default mongoose.model("Task", Task)