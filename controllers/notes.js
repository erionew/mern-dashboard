import Note from "../models/Note.js"

const noteController = {

index: (req, res) => {  
Note.find({})
.then(note => {
res.json(note)
})
},
create: (req, res) => {
note.create(req.body)
.then(note => {
res.json(note)
})
},
edit: (req, res) => {
Note.findOneAndUpdate({name: req.params.name}, req.body)
.then(note => {
res.json(note)
})
},
delete: (req, res) => {
Note.findOneAndDelete({name: req.params.name})
.then(note => {
res.json(note)
})
}
}
console.log(noteController)
export default noteController;