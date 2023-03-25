import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/dashboard-data', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to database'))

export default mongoose