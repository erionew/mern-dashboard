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