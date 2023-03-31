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
Task.findOneAndUpdate({name: req.params.name}, req.body)
.then(task => {
res.json(task)
})
},
delete: (req, res) => {
Task.findOneAndDelete({name: req.params.name})
.then(task => {
res.json(task)
})
}
}
console.log(taskController)
export default taskController;