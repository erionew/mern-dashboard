import Task from "../models/Task.js"

const taskController = {

index: (req, res) => {  
Task.find({})
.then(task => {
res.json(task)
})
},
create: (req, res) => {
Task.create(req.body)
.then(task => {
res.json(task)
})
},
edit: (req, res) => {
Task.findOneAndUpdate({_id: req.params.id}, req.body)
.then(task => {
res.json(task)
})
},
delete: (req, res) => {
Task.findOneAndDelete({_id: req.params.id})
.then(task => {
res.json(task)
})
}
}
console.log(taskController)
export default taskController;