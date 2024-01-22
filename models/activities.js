import mongoose from 'mongoose'

const Schema = mongoose.Schema

const activitySchema = new Schema({
  name: String,
  type: String,
  venue: String
}, {
  timestamps: true
})

const Activity = mongoose.model('Activity', activitySchema)

export {
  Activity
}