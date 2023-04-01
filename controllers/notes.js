import Note from "../models/Note.js"

const noteController = {

index: (req, res) => {  
Note.find({})
.then(note => {
res.json(note)
})
},
create: (req, res) => {
Note.create(req.body)
.then(note => {
res.json(note)
})
},
edit: (req, res) => {
Note.findOneAndUpdate({_id: req.params.id}, req.body)
.then(note => {
res.json(note)
})
},
delete: (req, res) => {
Note.findOneAndDelete({_id: req.params.id})
.then(note => {
res.json(note)
})
}
}
console.log(noteController)
export default noteController;