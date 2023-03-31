# MERN (Back End)

### Functionality
Technologies Used/how: 
1. Mongoose/MongoDB, Node. etc.
2. Express Router
3. CRUD/REST API: create the notes and tasks in the backend that will be integrated with the front end for user data retrieval and rendering

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
        
   //The Front + Back End Integration
 1. We started by setting up the back end connections/servers including imlpementing all routes
 2. The models and schemas were then created that would store the user's data
 3. The app was deployed onto Heroku so that the frontend could get it and render it to the page
