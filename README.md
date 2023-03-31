# MERN (Back End)

### Functionality
Technologies Used/how: 
1. React: components and router/links to pages
2. React Router: links to the different pages in tehe nav bar
2. CRUD/REST API: create the notes and tasks in the backend

### EXAMPLES OF CODE:

   //Note Schema/Model
    
      import mongoose from '../db/connection.js'

      const Note =  new mongoose.Schema({
          title : String, 
          body: String
      })

      export default mongoose.model("Note", Note)
    
    import express from 'express'
    
   //Creating Notes router
    
    import Note from '../models/Note.js'

    const noteRouter = express.Router()

    noteRouter.get('/notes', async (req, res) => {
        const notes = await Note.find({})
            res.json(notes)
    })

    export default noteRouter 
    
#### How does our App work?
    //User Experience
        //user clicks sees homepage with date, time, and nav bar
        //on the notes page, the user sees all notes rendered to page and a button to create a new note
        //the new note prompts the user with a form to enter the information
        //when the user presses enter the notes are rendered to the page
