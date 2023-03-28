# mern-dashboard-backend

#### THE USER EXPERIENCE - Functionality


Technologies Used/how: 
1. React: components and router/links to pages
2. Node & Express
3. 

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
    
#### File Tree:

            /lib
                /db - the Database
                    /1 seed.js
                    /2 connection.js
                    /4 budget.json
                /controllers
                    /1 .js
                    /2 .js
                    /3 .js
                /models - schemas
                    /1 .js
                    /2 .js
                    /3 .js
                /routes
                    /1 .js 
                    /1 .js
                    /2 .js
                    /3 .js
                index.js
